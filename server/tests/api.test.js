const request = require('supertest');

// 1. Mock 'sheets' module BEFORE requiring server
jest.mock('../sheets', () => ({
  appendToSheet: jest.fn().mockResolvedValue({ success: true })
}));

// Mock express-rate-limit to bypass 429 errors during testing
jest.mock('express-rate-limit', () => jest.fn(() => (req, res, next) => next()));

// 2. Mock 'nodemailer'
// We will use mockImplementation in specific tests to simulate failures
const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-id' });
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: mockSendMail
  })
}));

// 3. Mock global fetch for reCAPTCHA
// We will allow overriding this behavior in tests
const mockFetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ success: true })
});
global.fetch = mockFetch;

const app = require('../server');

describe('API Integration Tests', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.RECAPTCHA_SECRET_KEY = 'test-secret';
    process.env.EMAIL_USER = 'admin@example.com';
    
    // Reset default success mocks
    mockSendMail.mockResolvedValue({ messageId: 'test-id' });
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ success: true })
    });
  });

  /* ========================================================================
     CONTACT FORM ENDPOINT
     ======================================================================== */
  describe('POST /api/contact', () => {
    const validContactData = {
      name: 'Test Name',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'Hello World',
      captchaToken: 'valid-token'
    };

    it('should return 200 and send emails on valid input', async () => {
      const res = await request(app).post('/api/contact').send(validContactData);
      
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Contact email sent successfully');
      // Should call sendMail twice (Admin + User)
      expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('should return 400 if Name is missing', async () => {
      const { name, ...invalidData } = validContactData;
      const res = await request(app).post('/api/contact').send(invalidData);
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'Missing required fields');
    });

    it('should return 400 if Email is missing', async () => {
      const { email, ...invalidData } = validContactData;
      const res = await request(app).post('/api/contact').send(invalidData);
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 if Phone is missing', async () => {
      const { phone, ...invalidData } = validContactData;
      const res = await request(app).post('/api/contact').send(invalidData);
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 if Message is missing', async () => {
      const { message, ...invalidData } = validContactData;
      const res = await request(app).post('/api/contact').send(invalidData);
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 if ReCAPTCHA verification fails', async () => {
      // Mock fetch to return success: false
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve({ success: false })
      });

      const res = await request(app).post('/api/contact').send(validContactData);
      
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'ReCAPTCHA verification failed.');
      expect(mockSendMail).not.toHaveBeenCalled();
    });

    it('should return 500 if Email Service fails', async () => {
      // Mock sendMail to reject
      mockSendMail.mockRejectedValueOnce(new Error('SMTP Error'));

      const res = await request(app).post('/api/contact').send(validContactData);
      
      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('error', 'Failed to send email');
    });
  });

  /* ========================================================================
     EVENT REGISTRATION ENDPOINT
     ======================================================================== */
  describe('POST /api/register-event', () => {
    const validEventData = {
      parentName: 'Parent',
      parentEmail: 'parent@test.com',
      parentPhone: '123',
      childName: 'Child',
      childDOB: '2020-01-01',
      favoriteColor1: 'Red',
      flipBranch: 'Test Branch',
      captchaToken: 'valid-token'
    };

    it('should return 200 and send emails on valid input', async () => {
      const res = await request(app).post('/api/register-event').send(validEventData);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Event registration email sent successfully');
      expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('should return 400 if ReCAPTCHA verification fails', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve({ success: false })
      });

      const res = await request(app).post('/api/register-event').send(validEventData);
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'ReCAPTCHA verification failed.');
    });

    it('should return 500 if Email Service fails', async () => {
      mockSendMail.mockRejectedValueOnce(new Error('SMTP Error'));
      const res = await request(app).post('/api/register-event').send(validEventData);
      expect(res.statusCode).toEqual(500);
    });
  });

  /* ========================================================================
     SCHEDULE REGISTRATION ENDPOINT
     ======================================================================== */
  describe('POST /api/register-schedule', () => {
    const validScheduleData = {
      locationName: "Test Location",
      parentName: "Parent",
      parentEmail: "parent@test.com", 
      parentPhone: "123",
      childName: "Child",
      childDOB: "2015-01-01",
      childSchool: "Test School",
      emergencyName: "Emergency",
      emergencyPhone: "999",
      captchaToken: "valid-token"
    };

    it('should return 200 and send emails on valid input', async () => {
      const res = await request(app).post('/api/register-schedule').send(validScheduleData);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Schedule registration email sent successfully');
      expect(mockSendMail).toHaveBeenCalledTimes(2);
    });

    it('should return 400 if ReCAPTCHA verification fails', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve({ success: false })
      });

      const res = await request(app).post('/api/register-schedule').send(validScheduleData);
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'ReCAPTCHA verification failed.');
    });

    it('should return 500 if Email Service fails', async () => {
      mockSendMail.mockRejectedValueOnce(new Error('SMTP Error'));
      const res = await request(app).post('/api/register-schedule').send(validScheduleData);
      expect(res.statusCode).toEqual(500);
    });
  });
});

import { useState, useEffect } from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export default function SimpleCaptcha({ onValidate }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    // Generate two random numbers between 1 and 9
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);
    setTouched(true);

    const sum = num1 + num2;
    const isCorrect = parseInt(val) === sum;

    setIsValid(isCorrect);
    onValidate(isCorrect);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mt: 2,
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "text.primary" }}
      >
        {num1} + {num2} = ?
      </Typography>

      <TextField
        value={userAnswer}
        onChange={handleChange}
        placeholder="Answer"
        variant="outlined"
        size="small"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: { textAlign: "center", width: "60px" },
        }}
        error={touched && !isValid && userAnswer !== ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isValid ? (
                <CheckCircleIcon color="success" />
              ) : (
                touched && userAnswer !== "" && <ErrorIcon color="error" />
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

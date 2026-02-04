
import os
import glob

def cleanup_images(base_dir):
    """
    Deletes .jpg, .jpeg, and .png files in the given directory and its subdirectories
    only if a corresponding .webp file exists.
    """
    extensions = ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']
    deleted_count = 0
    reclaimed_space = 0

    print(f"Scanning directory: {base_dir}...")

    for ext in extensions:
        # Recursive search for files with the given extension
        files = glob.glob(os.path.join(base_dir, '**', ext), recursive=True)
        
        for file_path in files:
            # Check if a .webp version exists
            root, _ = os.path.splitext(file_path)
            webp_path = root + ".webp"
            
            if os.path.exists(webp_path):
                try:
                    file_size = os.path.getsize(file_path)
                    os.remove(file_path)
                    deleted_count += 1
                    reclaimed_space += file_size
                    print(f"Deleted: {file_path}")
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")
            else:
                print(f"Skipped (no WebP found): {file_path}")

    print("-" * 30)
    print(f"Cleanup complete.")
    print(f"Total files deleted: {deleted_count}")
    print(f"Total space reclaimed: {reclaimed_space / (1024 * 1024):.2f} MB")

if __name__ == "__main__":
    # Define directories to scan
    directories = [
        os.path.join(os.getcwd(), "src", "assets"),
        os.path.join(os.getcwd(), "public")
    ]
    
    confirm = input("This will DELETE original image files if a .webp version exists. Are you sure? (y/n): ")
    if confirm.lower() == 'y':
        for directory in directories:
            if os.path.exists(directory):
                cleanup_images(directory)
            else:
                print(f"Directory not found: {directory}")
    else:
        print("Operation cancelled.")

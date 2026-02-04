import os
from PIL import Image
from pathlib import Path

# Directories to search (relative to project root)
# We assume the script is run from project root or we adjus paths
DIRECTORIES = [
    "src/assets",
    "public"
]

# Extensions to process
EXTENSIONS = {".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"}

def optimize_images():
    # If script is run from 'scripts/' folder, we need to go up one level
    # Or we assume user runs it from root like 'python3 scripts/optimize_images.py'
    
    base_dir = Path.cwd()
    
    total_saved = 0
    converted_count = 0
    
    for dir_name in DIRECTORIES:
        directory = base_dir / dir_name
        
        if not directory.exists():
            print(f"Directory not found: {directory}")
            continue

        for root, _, files in os.walk(directory):
            for file in files:
                file_path = Path(root) / file
                
                if file_path.suffix in EXTENSIONS:
                    # Target webp path
                    webp_path = file_path.with_suffix(".webp")
                    
                    try:
                        with Image.open(file_path) as img:
                            original_size = file_path.stat().st_size
                            
                            print(f"Converting: {file_path.relative_to(base_dir)}")
                            
                            # Save as WebP
                            # quality=80 is a good balance
                            img.save(webp_path, "WEBP", quality=80)
                            
                            new_size = webp_path.stat().st_size
                            saved = original_size - new_size
                            total_saved += saved
                            converted_count += 1
                            
                            print(f"  -> Created: {webp_path.name} ({original_size/1024:.1f}KB -> {new_size/1024:.1f}KB)")
                            
                    except Exception as e:
                        print(f"Error converting {file_path}: {e}")

    print(f"\nSummary:")
    print(f"  Converted {converted_count} images.")
    print(f"  Total space saved: {total_saved / (1024 * 1024):.2f} MB (vs original files)")
    print(f"  Note: Original files are NOT deleted.")

if __name__ == "__main__":
    optimize_images()

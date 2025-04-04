from pathlib import Path

def chunk_text(text, max_length=500):
    sentences = text.split('. ')
    chunks = []
    current = ""
    for sentence in sentences:
        if len(current) + len(sentence) <= max_length:
            current += sentence + ". "
        else:
            chunks.append(current.strip())
            current = sentence + ". "
    if current:
        chunks.append(current.strip())
    return chunks

# Load resume from text file
resume_path = Path("resume.txt")
resume_text = resume_path.read_text()

# Split into chunks
chunks = chunk_text(resume_text)

# Save to file
with open("resume_chunks.json", "w") as f:
    import json
    json.dump(chunks, f, indent=2)

print(f"Saved {len(chunks)} chunks.")

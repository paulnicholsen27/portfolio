import boto3
import json

bedrock = boto3.client("bedrock-runtime", region_name="us-east-1")

def embed_text(text):
    response = bedrock.invoke_model(
        modelId="amazon.titan-embed-text-v1",
        contentType="application/json",
        accept="application/json",
        body=json.dumps({"inputText": text})
    )
    body = json.loads(response["body"].read())
    return body["embedding"]

# Load chunks
with open("resume_chunks.json") as f:
    chunks = json.load(f)

# Create list of {text, embedding}
embedded_chunks = [{"text": chunk, "embedding": embed_text(chunk)} for chunk in chunks]

# Save to file
with open("resume_embedded.json", "w") as f:
    json.dump(embedded_chunks, f)

import boto3
import uuid
import json
from decimal import Decimal

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb', region_name="us-east-1")
table = dynamodb.Table('ResumeChunks')

# Load the JSON file with the embeddings
with open("resume_embedded.json") as f:
    chunks = json.load(f)

# Function to convert all float values to Decimal
def convert_to_decimal(value):
    if isinstance(value, float):
        return Decimal(str(value))  # Convert float to Decimal
    elif isinstance(value, list):  # If it's a list, recursively convert each item
        return [convert_to_decimal(v) for v in value]
    elif isinstance(value, dict):  # If it's a dictionary, recursively convert each value
        return {k: convert_to_decimal(v) for k, v in value.items()}
    return value  # Return the value as-is if it's not a float, list, or dict

# Process each item and upload it to DynamoDB
for item in chunks:
    # Convert the embedding (which may contain float values) to Decimal
    item["embedding"] = convert_to_decimal(item["embedding"])

    # Put item into DynamoDB
    table.put_item(Item={
        "id": str(uuid.uuid4()),
        "text": item["text"],
        "embedding": item["embedding"]
    })

print("Uploaded chunks to DynamoDB.")

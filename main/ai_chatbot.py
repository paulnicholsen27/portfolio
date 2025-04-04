from langchain.embeddings import HuggingFaceEmbeddings
import faiss
import numpy as np

# Load resume
with open("resume.txt", "r") as f:
    resume_text = f.read()

# Generate embeddings
embedder = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
resume_embedding = embedder.embed_query(resume_text)

# Create FAISS index
dimension = len(resume_embedding)
index = faiss.IndexFlatL2(dimension)
index.add(np.array([resume_embedding]))

def query_chatbot(question):
    query_embedding = embedder.embed_query(question)
    _, results = index.search(np.array([query_embedding]), 5)
    return "Match found!" if len(results) > 0 else "No match found."

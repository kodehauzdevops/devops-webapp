## Installing Backend

### Install Dependencies
**Step 1:** Ensure you have python3 and pip3 installed. Use python3 to create a virtual environment first
```bash
python3 -m venv venv
```

**Step 2:** Install dependencies
```bash
source venv/bin/activate
pip install -r requirements.txt
```

**Step 3:** Launch backend using `uvicorn` command
```bash
uvicorn app.main:app --reload
```

**Step 4:** Visit the endpoint on a browser. Uvicorn will usually run on port 8000

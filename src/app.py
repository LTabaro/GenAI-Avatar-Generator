from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import config

app = Flask(__name__)
CORS(app)

OPENAI_API_KEY = config.OPENAI_API_KEY
OPENAI_API_URL = "https://api.openai.com/v1/images/generations"


@app.route('/generate-avatar', methods=['POST'])
def generate_avatar():
    data = request.json
    prompt = data.get('prompt', 'Generate a unique avatar for a game character.')

    # Use DALL-E 3 for text-to-image generation
    response = requests.post(
        "https://api.openai.com/v1/images/generations",
        headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}"
        },
        json={
            "prompt": prompt,
            "n": 1,  # Number of images to generate
            "size": "512x512"  # Image size
        }
    )

    if response.status_code == 200:
        avatar_data = response.json()
        return jsonify(avatar_data)
    else:
        return jsonify({"error": "Failed to generate avatar", "details": response.json()}), 500


# Route for generating story
@app.route('/generate-story', methods=['POST'])
def generate_story():
    data = request.json
    storyline = data.get('storyline', 'Exploring a virtual casino city')  # Default storyline

    # Use GPT-4 to generate the story
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",  # Chat-completions endpoint
        headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}"
        },
        json={
            "model": "gpt-4o",
            "messages": [
                {"role": "system", "content": "You are a creative assistant helping to write interactive quest stories."},
                {"role": "user", "content": f"Write a detailed quest story based on the theme: {storyline}."}
            ],
            "max_tokens": 1000
        }
    )

    if response.status_code == 200:
        story = response.json().get('choices', [{}])[0].get('message', {}).get('content', '')
        return jsonify({"story": story})
    else:
        return jsonify({"error": "Failed to generate story", "details": response.json()}), 500


# Run the app
if __name__ == '__main__':
    app.run(debug=True)

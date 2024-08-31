from transformers import pipeline # type: ignore

# Allocate a pipeline for sentiment-analysis
classifier = pipeline('sentiment-analysis')

if __name__ == '__main__':
    # Predict the sentiment of a given text
    print(classifier('We are very happy to show you the 🤗 Transformers library.'))
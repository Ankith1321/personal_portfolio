# Drug Feedback Analytics and Condition Classification

## Overview

This project is an interactive data-science application for exploring patient-reported drug feedback and testing machine-learning workflows for medical-condition classification.

The application combines exploratory data analysis, data preprocessing, sentence embeddings, classification, experimental clustering, regression exploration, and interactive predictions through a Streamlit interface.

## Problem Statement

Drug-feedback datasets contain multiple signals, including drug names, medical conditions, effectiveness ratings, satisfaction ratings, ease-of-use ratings, and textual information.

The objective of this project is to explore these relationships and build an interactive ML workflow for condition classification based on drug-feedback data.

## Key Features

* Dataset loading from Kaggle
* Exploratory data analysis
* Rating-distribution visualizations
* Correlation analysis
* Interactive Streamlit dashboard
* Medical-condition classification
* Sentence Transformer embeddings
* Live user-input prediction interface
* Experimental clustering and regression workflows

## Classification Workflow

```text
Kaggle Dataset
      ↓
Data Loading and Cleaning
      ↓
Numerical Ratings → Standard Scaling
      +
Drug Name → One-Hot Encoding
      +
Textual Information → Sentence Transformer Embeddings
      ↓
Combined Feature Matrix
      ↓
Train-Test Split
      ↓
Logistic Regression
      ↓
Medical-Condition Prediction
      ↓
Interactive Streamlit Interface
```

## Technologies Used

* Python
* Pandas
* NumPy
* Scikit-learn
* Streamlit
* Sentence Transformers
* Matplotlib
* Seaborn
* Kaggle Hub

## Live Demo

Try the deployed application:

`https://drug-performance.streamlit.app/`

## Run Locally

```bash
git clone TODO: ADD UPDATED REPOSITORY URL
cd drug-feedback-analytics
pip install -r requirements.txt
streamlit run app.py
```

## Current Limitations

* Classification preprocessing should be moved into a leakage-safe Scikit-learn pipeline.
* Clustering should be redesigned so that known condition labels are not used as clustering inputs.
* Regression should use an independent target variable.
* More robust model comparison and cross-validation should be added.

## Disclaimer

This is an educational data-science project based on patient-reported feedback. It is not a medical, diagnostic, or clinical decision-support tool.

## Author

Saiankith Reddy Kolli

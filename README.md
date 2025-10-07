## Multimodality in Mental Health

An integrated **machine learning framework for mental health assessment** that combines **facial emotion recognition**, **heart rate variability (HRV)**–based stress detection, and **PHQ-9 questionnaire analysis** into one unified web platform.
This project demonstrates how **multimodal AI** can enable scalable, accessible, and objective mental-health screening tools.

Traditional mental-health assessments rely heavily on subjective self-reports.
This project bridges that gap by using **multi-source data fusion** to provide holistic and real-time insights into an individual’s emotional and psychological state.

**Core Components**

1.  **Facial Emotion Recognition (FER)** – CNN model classifies seven emotions from facial images.
2.  **HRV-Based Stress Detection** – 1D-CNN trained on physiological signals from the SWELL dataset.
3.  **PHQ-9 Depression Classifier** – Logistic regression model predicts depression severity.
4.  **Web Integration** – Combines all three modalities into an interactive web interface for real-time feedback.
---

### Datasets Used

| Dataset                                      | Purpose                                               | Source                                                   |
| -------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| **SWELL-KW Dataset**                         | HRV-based stress detection                            | Physiological + behavioral data from office environments |
| **PHQ-9 Dataset**                            | Depression assessment via self-reported questionnaire | Public PHQ-9 ambulatory assessment dataset               |
| **FER-2013 (Facial Expression Recognition)** | Emotion detection from facial images                  | Kaggle                                                   |


###  Model Architecture

```
                 ┌────────────────────┐
                 │ Facial Emotion CNN │
                 └─────────┬──────────┘
                           │
                           ▼
 ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
 │ HRV 1D-CNN   │ →  │ Fusion Layer │ →  │ Final Output │
 └──────────────┘    └──────────────┘    └──────────────┘
                           ▲
                           │
                 ┌────────────────────┐
                 │ PHQ-9 Classifier   │
                 └────────────────────┘
```

Each modality independently classifies emotional, physiological, and self-reported signals.
Outputs are fused in a fully connected layer to provide a comprehensive depression-severity score.

---

###  Experimental Results

| Model                         | Accuracy | ROC-AUC | Notes                                                 |
| ----------------------------- | -------- | ------- | ----------------------------------------------------- |
| **PHQ-9 Logistic Regression** | 90.7%    | 0.95    | Excellent interpretability                            |
| **HRV-Based 1D-CNN**          | ~98%     | —       | 3 stress classes: none / time pressure / interruption |
| **Facial Emotion CNN**        | 91.6%    | —       | 7 emotion categories                                  |

---


###  Example Output

```
Facial Emotion: Fear (0.99)
HRV Stress Level: Moderate
PHQ-9 Score: 12 → Mild Depression
Overall Assessment: Moderate Risk
```

###  Future Enhancements

* Add **text sentiment + summarization** (using MentSum dataset).
* Integrate **real-time wearable sensor data**.
* Deploy on AWS with scalable inference endpoints.
* Build an **interactive user dashboard** for mental-health tracking over time.


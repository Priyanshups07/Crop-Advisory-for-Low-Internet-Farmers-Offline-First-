📘 Crop Disease Advisory System – Data Documentation

## 1. Overview

This document defines the core data entities and parameters used in an offline-first, text-based Crop Disease Advisory System.
The system is designed to assist farmers by providing symptom-based disease identification and advisory actions without relying on internet connectivity or image-based analysis.

The advisory logic is based on crop type, growth stage, region, soil moisture condition, and observed symptoms.

## 2. Crop Definition

### 2.1 Supported Crops

The system currently supports the following major crops:

| Crop ID | Crop Name  |
|---------|------------|
| C1      | Rice       |
| C2      | Wheat      |
| C3      | Sugarcane  |
| C4      | Maize      |

These crops are selected due to their high cultivation area and economic importance.

## 3. Growth Stage Classification

### 3.1 Growth Stages

Each crop progresses through defined growth stages, which influence disease susceptibility and advisory decisions.

| Stage Code | Growth Stage   |
|------------|----------------|
| GS1        | Planting       |
| GS2        | Vegetative     |
| GS3        | Grand Growth   |
| GS4        | Flowering      |
| GS5        | Maturity       |

📌 Growth stage information helps refine advisory actions (e.g., fungicide use is stage-dependent).

## 4. Regional Context

### 4.1 Region Definition

The system supports state-wise regional classification to allow:

- Localized advisory relevance
- Future extension with climate or seasonal rules

| Region Type | Description                     |
|-------------|---------------------------------|
| State       | Indian state (e.g., Maharashtra, Punjab, Tamil Nadu) |

📌 Region data can be extended later for district-level or agro-climatic zones.

## 5. Soil Moisture Classification

### 5.1 Soil Moisture Levels

Soil moisture status plays a key role in disease development and irrigation advice.

| Moisture Code | Soil Moisture Level |
|---------------|---------------------|
| SM1           | Dry                 |
| SM2           | Low                 |
| SM3           | Moderate            |
| SM4           | High                |

📌 Soil moisture values can be:

- Manually entered by the farmer
- Estimated using local knowledge
- Integrated with sensors (future scope)

## 6. Symptom Definition

### 6.1 Observable Symptoms

The system relies on farmer-observable visual symptoms (no images required).

| Symptom Code | Symptom Description      |
|--------------|--------------------------|
| SYM0         | No visible symptoms      |
| SYM1         | Brown lesions            |
| SYM2         | Yellowing leaves         |
| SYM3         | Gray spindle-shaped spots|
| SYM4         | Leaf drying              |
| SYM5         | Leaf tip burn            |
| SYM6         | Wilting                  |

📌 Farmers select symptoms via simple checkboxes or icons.

## 7. Disease Identification

### 7.1 Detected Disease States

Based on symptom combinations and contextual parameters, the system identifies possible disease conditions.

| Disease Code | Disease Name      |
|--------------|-------------------|
| D0           | Healthy           |
| D1           | Brown Spot        |
| D2           | Leaf Blast        |
| D3           | Bacterial Blight  |

⚠️ The system provides indicative diagnosis, not medical certainty.

## 8. Advisory Action Framework

### 8.1 Advisory Actions

Once a disease condition is detected, the system provides actionable advisories.

| Action Code | Advisory Action              |
|-------------|------------------------------|
| A1          | No action needed             |
| A2          | Monitor crop condition       |
| A3          | Increase irrigation          |
| A4          | Reduce irrigation            |
| A5          | Improve drainage             |
| A6          | Apply recommended fungicide  |

📌 Advisory actions are:

- Simple
- Stage-aware
- Offline-accessible
- Multi-language ready

## 9. Advisory Decision Logic (High-Level)

The advisory decision is derived using the following inputs:

```
Crop
+ Growth Stage
+ Region
+ Soil Moisture
+ Observed Symptoms
→ Detected Disease
→ Advisory Action
```

### Example:

- Crop: Rice
- Growth Stage: Vegetative
- Soil Moisture: High
- Symptoms: Gray spindle-shaped spots, Leaf drying

➡ Detected Disease: Leaf Blast
➡ Advisory: Apply recommended fungicide

## 10. Offline System Characteristics

| Feature           | Description                  |
|-------------------|------------------------------|
| Internet Dependency | None                       |
| Image Processing  | Not required                 |
| Advisory Logic    | Rule-based                   |
| Storage           | SQLite / JSON                |
| Language Support  | Multi-language (offline)     |
| Explainability    | High (transparent rules)     |

## 11. Disclaimer (Mandatory)

"This advisory provides indicative guidance based on observed symptoms. Farmers are advised to consult local agricultural experts or extension officers in case of severe infestation."

## 12. Extensibility (Future Scope)

- Add more crops and diseases
- Add seasonal rules
- Add climate parameters
- Integrate sensor-based soil moisture
- Add confidence scoring
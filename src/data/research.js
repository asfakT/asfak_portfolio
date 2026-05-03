export const researchPapers = [
  {
    id: 1,
    title: 'Deep Learning-Based Crop Disease Detection Using Transfer Learning on PlantVillage Dataset',
    status: 'Published',
    venue: 'International Conference on Machine Learning & Data Science (ICMLDS 2023)',
    year: 2023,
    abstract:
      'We propose a transfer learning framework leveraging pre-trained CNN architectures (ResNet50, EfficientNet-B4) for accurate crop disease classification. Our approach achieves 94.3% accuracy on the PlantVillage benchmark, outperforming baseline models by 6.2%. We also introduce Grad-CAM visualization to improve model interpretability for agricultural applications.',
    findings: [
      '94.3% classification accuracy across 38 disease classes',
      'EfficientNet-B4 outperformed ResNet50 by 2.1% with 40% fewer parameters',
      'Transfer learning reduced training time by 65% vs. training from scratch',
      'Grad-CAM identified key disease markers visible to agronomists',
    ],
    tools: ['Python', 'PyTorch', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    keywords: ['Transfer Learning', 'CNN', 'Crop Disease', 'ResNet50', 'EfficientNet', 'Grad-CAM'],
    doi: 'https://doi.org/10.xxxx',
    pdf: null,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Sentiment Analysis of Social Media Data Using Fine-Tuned BERT for Low-Resource Languages',
    status: 'Under Review',
    venue: 'IEEE Transactions on Neural Networks and Learning Systems',
    year: 2024,
    abstract:
      'We present a fine-tuning approach for BERT-based models targeting sentiment classification in low-resource languages. Using a custom dataset of 120k Bengali social media posts, our model achieves 89.7% F1-score, significantly outperforming traditional ML baselines and multilingual BERT variants.',
    findings: [
      '89.7% F1-score on Bengali sentiment classification',
      'Outperforms mBERT by 8.3% on low-resource test sets',
      'Dataset of 120k annotated Bengali social media posts released publicly',
      'Demonstrated robustness to code-switching (Bengali-English mix)',
    ],
    tools: ['Python', 'HuggingFace Transformers', 'PyTorch', 'NLTK', 'spaCy', 'Pandas'],
    keywords: ['BERT', 'Sentiment Analysis', 'NLP', 'Low-Resource', 'Bengali', 'Fine-tuning'],
    doi: null,
    pdf: null,
    color: 'red',
  },
];

export const researchInterests = [
  'Machine Learning & Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Algorithm Design & Optimization',
  'Distributed Systems',
  'Human-Computer Interaction',
];

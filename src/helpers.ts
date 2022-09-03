const mobilenet = require('@tensorflow-models/mobilenet');

type Prediction = {
    probability: number,
    className: string,
}

const getMostProbablePrediction = (predictions: Array<Prediction>) => {
    return predictions.sort((a: Prediction, b: Prediction) => b.probability - a.probability)[0];
}

export const classify = async () : Promise<string> => {
    const img = document.querySelector('.uploaded-dog');
    const model = await mobilenet.load();
    const predictions: Array<Prediction> = await model.classify(img);

    return predictions.length ? getMostProbablePrediction(predictions)?.className : '';
}

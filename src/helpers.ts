const mobilenet = require('@tensorflow-models/mobilenet');

type Prediction = {
    probability: number,
    className: string,
}

type MobileNetModel = {
    classify: (img: Element | null) => Promise<Array<Prediction>>,
}

const getMostProbablePrediction = (predictions: Array<Prediction>) => {
    return predictions.sort((a: Prediction, b: Prediction) => b.probability - a.probability)[0];
}

export const classify = async () : Promise<string | null> => {
    const img = document.querySelector('.uploaded-dog');
    const model: MobileNetModel = await mobilenet.load();
    const predictions: Array<Prediction> = await model.classify(img);

    return predictions.length ? getMostProbablePrediction(predictions)?.className : null;
}

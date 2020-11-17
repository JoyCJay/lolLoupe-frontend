import { Random as _Random, mock } from "mockjs";
const Random = _Random;

const produceNewsData = function() {
    const newsList = [];
    for (let i = 0; i < 20; i++) {
        const newNewsObject = {
            title: Random.ctitle(),
            content: Random.cparagraph(),
            createdTime: Random.date()
        };
        newsList.push(newNewsObject);
    }

    return newsList;
};

mock("/mock/news", produceNewsData);

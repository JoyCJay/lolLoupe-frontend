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

const produceSummoner = function() {
    return {
        accountId: "-2ZuBG00UOZvnD2Py9BUSCPi4ZxYqeHH8JZC4WWQ5_ejtK8",
        id: "zpQamo2g9bfKl9LL9wgtglsEWhQ1_xLM135CPhuT301dSQqK",
        name: "JoyCJay",
        profileIconId: 4653,
        puuid: "cruzGLItmlBakSkYs4b-7XeTvq_rl1gYXrpzeDS_QvAR0azW2x6GCZJQhxcybKsj9Xby6vUIcY8oqg",
        revisionDate: 1604407625000,
        summonerLevel: 137
    };
};
mock("/mock/summoner", produceSummoner);

let raceData;
getRaceData();

async function getRaceData() {
  const SERVER_URL = "https://showcases.yalco.kr/javascript/mockserver/";

  // 경주 기록 받기
  const raceResult = await fetch(SERVER_URL + "race-result").then((result) =>
    result.json()
  );
  console.log("1.", raceResult);

  const runners = [];
  const runnerIdxs = raceResult.map((itm) => itm["runner_idx"]);

  // 기록상 주자 번호에 따라 주자들의 정보 받기
  for (const runnerIdx of runnerIdxs) {
    const runner = await fetch(`${SERVER_URL}runners/${runnerIdx}`).then(
      (result) => result.json()
    );
    runners.push(runner);
  }
  console.log("2.", runners);

  // 주자들의 학교 번호 중 중복을 거른 뒤 이에 따라 학교 정보 받기
  const schools = [];
  const schoolIdxs = [...new Set(runners.map((itm) => itm["school_idx"]))];
  for (const schoolIdx of schoolIdxs) {
    const school = await fetch(`${SERVER_URL}schools/${schoolIdx}`).then(
      (result) => result.json()
    );
    schools.push(school);
  }
  console.log("3.", schools);

  // 세 배열의 객체들을 조인
  raceData = raceResult.map((result) => {
    const runner = {
      ...runners.find(({ idx }) => idx === result.runner_idx),
    };

    runner.school = schools.find(({ idx }) => idx === runner.school_idx).name;

    delete runner.school_idx;
    delete runner.idx;

    return {
      ...result,
      ...runner,
    };
  });
  console.log("4.", raceData);

  fillRaceTable();
}

function fillRaceTable() {
  // 배열 복사
  let data = [...raceData];

  const _school = document.querySelector("#school").value;
  const _grade = document.querySelector("#grade").value;
  const _sort = document.querySelector("#sort").checked;

  // 인풋 요소의 값들에 따라 필터링 또는 정렬
  if (_school) data = data.filter(({ school }) => school.startsWith(_school));
  if (_grade) data = data.filter(({ grade }) => grade >= _grade);
  if (_sort) data.sort((a, b) => a.record - b.record);

  // 먼저 tbody 부분을 비움
  const $tbody = document.querySelector("#raceTbody");
  while ($tbody.firstChild) {
    $tbody.removeChild($tbody.firstChild);
  }

  // tbody 채워넣기
  data.forEach((datum) => {
    const $newTr = document.createElement("tr");

    ["runner_idx", "school", "grade", "name", "record"].forEach((itm) => {
      const $newTd = document.createElement("td");
      $newTd.textContent = datum[itm];
      $newTr.appendChild($newTd);
    });
    $tbody.appendChild($newTr);
  });
}

document.querySelector("#school").addEventListener("change", (e) => {
  console.log(e.target.value);
  fillRaceTable();
});

document.querySelector("#grade").addEventListener("change", () => {
  fillRaceTable();
});

document.querySelector("#sort").addEventListener("change", () => {
  fillRaceTable();
});

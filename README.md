# hackathon
## <'확찐자'를 위한 식습관 분석 및 BMI 예측 모델>
> AI에 대한 모든 것이라는 주제로 진행된 1박 2일 경희대학교 해커톤에 참가하여 우수상을 획득한 프로젝트이다. 코로나로 인해 '확찐자'가 되어버린 사람들을 위해 그들의 식습관을 분석하여 미래 BMI를 
예측하는 모델을 구현하였고, MBTI를 레퍼런스로 하여 BMTI로 사용자의 식습관을 분류하였다.

## Table of Contents
_Note: This is only a navigation guide for the specification, and does not define or mandate terms for any specification-compliant documents._

- [Sections](#sections)
  - [Data](#data)
  - [Modeling](#modeling)
  - [UI](#ui)
  - [Maintainers](#maintainers)

### Data
- 사용자의 기본 정보와 체질량 지수, 식단 데이터가 필요하기 때문에 국민건강영양조사 데이터를 활용하였다. 국민건강조사는 국민의 건강지표 변화를 파악하여, 건강정책 추진의 근거 자료를 생산하는 것을 목적으로 수행되는 국가건강조사이다. 
- 데이터의 수집 기간은 2013년부터 2016년까지 총 4년으로 하였고 조사에 응답한 인구는 13년도-8018명, 14년도-7550명, 15년도-7380명, 16년도-8150명으로 총합 31098명이다.
![image](https://user-images.githubusercontent.com/56333934/118803460-55ffa580-b8de-11eb-957f-f28708aaa88d.png)

### Modeling
- 전처리
  * 20세 이상부터 40세 미만까지의 데이터만을 추출
  * Feature Selection : BMI에 가장 영향을 많이 미치는 음식을 선정.
  * RandomForest 변수중요도 분석과 R을 활용한 연관도 분석 결과가 대중적으로 생각하는 BMI에 영향을 미칠만한 음식이 등장하지 않아 일부는 분석가의 재량에 따라 선정
  * 선택된 Feature : `키`, `몸무게`, `나이`, `피자`,`햄버거`,`치킨`,`라면`,`아이스크림`,`과자`,`초콜릿`, `우유`, `소주`, `맥주`, `막걸리`,`콩나물`,`채소샐러드`,`달걀후라이/달걀말이`,
  `고등어/꽁치`,`된장찌개`, `김치찌개`
  

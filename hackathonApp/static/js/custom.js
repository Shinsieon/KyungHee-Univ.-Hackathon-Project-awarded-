$(document).ready(function(){
    if(window.location.pathname=='/survey/'){
    MakeSurvey(1,'질문2','당신의 키를 알려주세요','Height','user_height');
    MakeSurvey(1,'질문3','당신의 체중을 알려주세요','Weight','user_weight');
    $('#select_question4').clone().appendTo('.container');
    MakeSelectSurvey(5,'질문5','일주일에 햄버거 얼마나 드시나요?','FF_HAMBER');
    MakeSelectSurvey(6,'질문6','일주일에 치킨 얼마나 드시나요?','FF_F_CHIC');
    MakeSelectSurvey(7,'질문7','일주일에 라면 얼마나 드시나요?','FF_INSTNO');
    MakeSelectSurvey(8,'질문8','일주일에 아이스크림 얼마나 드시나요?','FF_ICECM');
    MakeSelectSurvey(9,'질문9','일주일에 과자 얼마나 드시나요?','FF_SNACK');
    MakeSelectSurvey(10,'질문10','일주일에 초콜릿 얼마나 드시나요?','FF_CHOCO');
    MakeSelectSurvey(11,'질문11','일주일에 우유 얼마나 드시나요?','FF_MILK');
    MakeSelectSurvey(12,'질문12','일주일에 소주 얼마나 드시나요?','FF_SOJU');
    MakeSelectSurvey(13,'질문13','일주일에 맥주 얼마나 드시나요?','FF_BEER');
    MakeSelectSurvey(14,'질문14','일주일에 막걸리 얼마나 드시나요?','FF_RWINE');
    MakeSelectSurvey(15,'질문15','일주일에 콩나물 얼마나 드시나요?','FF_SPROU');
    MakeSelectSurvey(16,'질문16','일주일에 채소샐러드 얼마나 드시나요?','FF_VSALAD');
    MakeSelectSurvey(17,'질문17','일주일에 달걀후라이/달갈말이 얼마나 드시나요?','FF_F_EGG');
    MakeSelectSurvey(18,'질문18','일주일에 고등어/꽁치 얼마나 드시나요?','FF_MACKER');
    MakeSelectSurvey(19,'질문19','일주일에 된장찌개 얼마나 드시나요?','FF_J_SOYP');
    MakeSelectSurvey(20,'질문20','일주일에 김치찌개 얼마나 드시나요?','FF_J_KIMC');
    $('#exer_select_question21').clone().appendTo('.container');
    MakeExerSurvey(22,'질문22','일주일에 얼마나 걷기 운동을 하시나요?','BE3_31');
    MakeExerSurvey(23,'질문23','일주일에 얼마나 앉아서 보내세요?','BE8_1');
    
    q_n = 1;
    if(q_n ==1){
        $(`#question${q_n}`).css('display','block');
        $(`#question${q_n} .back_box`).hide();
    }
    $('#button_box').clone().appendTo('#exer_select_question23');
    $('#start_btn').css('display','block');
    $('#start_btn').text('결과 보기');
    }
    
});
function MakeSurvey(category,question_number,question, answer,answer_id){
    $('#question1').clone().appendTo('.container');
    var childArrayNum = Number($(".container")[0].childElementCount);
    $($(".container")[0].children[childArrayNum-1]).attr('id','question'+childArrayNum);
    $(`#question${childArrayNum} .question_number`).text(question_number);
    $(`#question${childArrayNum} .question`).text(question);
    $(`#question${childArrayNum} input`).attr('id',answer_id);
    $(`#question${childArrayNum} label`).text(answer);
}
function nextbtn(){

    q_n++;
    if(q_n<4){
            $(`#question${q_n-1}`).css('display','none');
            $(`#question${q_n}`).css('display','block');
        }
    else if(q_n==4){
        $(`#question${q_n-1}`).css('display','none');
        $(`#select_question${q_n}`).css('display','block');
    }
    else if(q_n>4 && q_n<21){
        $(`#select_question${q_n}`).css('display','block');
        $(`#select_question${q_n-1}`).css('display','none');
    }
    else if(q_n==21){
        $(`#select_question${q_n-1}`).css('display','none');
        $(`#exer_select_question${q_n}`).css('display','block');
    }
    else if(q_n>21 && q_n<23){
        $(`#exer_select_question${q_n}`).css('display','block');
        $(`#exer_select_question${q_n-1}`).css('display','none');
    }
    else
    {
        $(`#exer_select_question${q_n}`).css('display','block');
        $(`#exer_select_question${q_n-1}`).css('display','none');
        $(`#exer_select_question${q_n} .next_box`).hide();
    }
}
function bfbtn(){
    q_n = q_n-1;
    if(q_n<3){
        $(`#question${q_n+1}`).css('display','none');
        $(`#question${q_n}`).css('display','block');
    }
    else if(q_n==3){
        $(`#select_question${q_n+1}`).css('display','none');
        $(`#question${q_n}`).css('display','block');
    }
    else if(q_n>3 && q_n<20){
        $(`#select_question${q_n+1}`).css('display','none');
        $(`#select_question${q_n}`).css('display','block');
    }
    else if(q_n==20){
        $(`#exer_select_question${q_n+1}`).css('display','none');
        $(`#select_question${q_n}`).css('display','block');
    }
    else{
        $(`#exer_select_question${q_n+1}`).css('display','none');
        $(`#exer_select_question${q_n}`).css('display','block');
    }
}
function MakeSelectSurvey(number, question_number, question, radio_name){
    $('#select_question4').clone().appendTo('.container');
    var childArrayNum = number;
    $($(".container")[0].children[childArrayNum-1]).attr('id','select_question'+childArrayNum);
    $(`#select_question${childArrayNum} .question_number`).text(question_number);
    $(`#select_question${childArrayNum} .question`).text(question);
    $(`#select_question${childArrayNum} input[type=radio]`).attr('name',radio_name);
}
function MakeExerSurvey(number, question_number, question, radio_name){
    $('#exer_select_question21').clone().appendTo('.container');
    var childArrayNum = number;
    $($(".container")[0].children[childArrayNum-1]).attr('id','exer_select_question'+childArrayNum);
    $(`#exer_select_question${childArrayNum} .question_number`).text(question_number);
    $(`#exer_select_question${childArrayNum} .question`).text(question);
    $(`#exer_select_question${childArrayNum} input[type=radio]`).attr('name',radio_name);
}
function showResult(){
    var user_name = $('#user_name').val();
    var user_height = $('#user_height').val();
    var user_weight = $('#user_weight').val();
    
    var FF_PIZZA = $('input[name=FF_PIZZA]:checked').val();
    var FF_HAMBER = $('input[name=FF_HAMBER]:checked').val();
    var FF_F_CHIC = $('input[name=FF_F_CHIC]:checked').val();
    var FF_INSTNO = $('input[name=FF_INSTNO]:checked').val();

    var FF_ICECM = $('input[name=FF_ICECM]:checked').val();
    var FF_SNACK = $('input[name=FF_SNACK]:checked').val();
    var FF_CHOCO = $('input[name=FF_CHOCO]:checked').val();
    var FF_MILK = $('input[name=FF_MILK]:checked').val();

    var FF_SOJU = $('input[name=FF_SOJU]:checked').val();
    var FF_BEER = $('input[name=FF_BEER]:checked').val();
    var FF_RWINE = $('input[name=FF_RWINE]:checked').val();

    var FF_SPROU = $('input[name=FF_SPROU]:checked').val();
    var FF_VSALAD = $('input[name=FF_VSALAD]:checked').val();
    var FF_F_EGG = $('input[name=FF_F_EGG]:checked').val();
    var FF_MACKER = $('input[name=FF_MACKER]:checked').val();
    var FF_J_SOYP = $('input[name=FF_J_SOYP]:checked').val();
    var FF_J_KIMC = $('input[name=FF_J_KIMC]:checked').val();

    var BE5_1 = $('input[name=BE5_1]:checked').val();
    var BE3_31 = $('input[name=BE3_31]:checked').val();
    var BE8_1 = $('input[name=BE8_1]:checked').val();

    var items = [FF_PIZZA, FF_HAMBER, FF_F_CHIC, FF_INSTNO, FF_ICECM, FF_SNACK,FF_CHOCO, FF_MILK, FF_SOJU, FF_BEER, FF_RWINE, FF_SPROU, FF_VSALAD, FF_F_EGG, FF_MACKER, FF_J_SOYP, FF_J_KIMC, BE5_1, BE3_31, BE8_1];

    localStorage.setItem("item", JSON.stringify(items));

    $('#user_name_hid').val(user_name);
    $('#user_height_hid').val(user_height); 
    $('#user_weight_hid').val(user_weight);  
    $('#FF_PIZZA_hid').val(FF_PIZZA);  
    $('#FF_HAMBER_hid').val(FF_HAMBER);  
    $('#FF_F_CHIC_hid').val(FF_F_CHIC); 
    $('#FF_INSTNO_hid').val(FF_INSTNO);  
    
    $('#FF_ICECM_hid').val(FF_ICECM); 
    $('#FF_SNACK_hid').val(FF_SNACK); 
    $('#FF_CHOCO_hid').val(FF_CHOCO); 
    $('#FF_MILK_hid').val(FF_MILK); 

    $('#FF_SOJU_hid').val(FF_SOJU); 
    $('#FF_BEER_hid').val(FF_BEER);  
    $('#FF_RWINE_hid').val(FF_RWINE);

    $('#FF_SPROU_hid').val(FF_SPROU);
    $('#FF_VSALAD_hid').val(FF_VSALAD);
    $('#FF_F_EGG_hid').val(FF_F_EGG);
    $('#FF_MACKER_hid').val(FF_MACKER);
    $('#FF_J_SOYP_hid').val(FF_J_SOYP); 
    $('#FF_J_KIMC_hid').val(FF_J_KIMC); 

    $('#BE5_1_hid').val(BE5_1); 
    $('#BE3_31_hid').val(BE3_31); 
    $('#BE8_1_hid').val(BE8_1); 


    $('#form_survey').submit();
    console.log(user_name);
}


function banchangraph(x,y) {
    var ctx = document.getElementById('bc_canvas').getContext('2d');

    
    window.chart1 = new Chart(ctx, {
        type: 'line',
        data : {
            labels : x_date,
            datasets : [{
                label : '수익률 그래프',
                backgroundColor : '#00ff0000',
                borderColor : 'rgb(255,99,132)',
                data : y_return,
                pointRadius: 0  
            }]
        },
        options : {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#333'
                }
            }
        }
    });
}
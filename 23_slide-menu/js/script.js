$(function() {
    // 変数dis : 初期値250
    var dis = 250;

    // アイコンをクリック
    $("button").click(function() {
        // bodyの子要素のmargin-leftを、それぞれ変数disの値だけふやす
        $("body").children().animate({ "margin-left": "+=" + dis + "px" } , 200);

        // disに-1をかける
        dis *= -1;
    });
}) ;
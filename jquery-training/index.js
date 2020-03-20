// 練習問題.『Hello,World』をアラート出力
alert('Hellow World');

// 1.『q01』のテキストカラーを赤に変更
$(function () {
  $('#q01').css('color','red');
})

// 2.『q02』のテキストカラーを青、背景色を黄色に変更
$(function () {
  $('#q02').css({'color':'blue','background':'yellow'});
});

// 3.『q03』の空の段落にテキスト「エレン」を追加
$(function() {
  $('#q03').text('エレン');
});

// 4.『q04』「エレン」のテキストを「駆逐してやるッ!!!」に書き換える
$(function() {
  $('#q04').text('駆逐してやるッ!!!')
});

// 5.『q05』「ときどきweb」の内容を<a href="#">リンクタグを含めた「ときどきweb」にhtml置換
$(function() {
  $('#q05').html('<a href="#">ときどきweb</a>');
});

// 6.「q06」のul要素にclass名「aaa」を追加
$(function() {
  $('#q06').addClass('aaa');
});

// 7.「q07」のul要素内のli要素だけを削除
$(function() {
  $('#q07').children().remove();
});

// 8.「button」のボタンをクリックしたら『クリックしますた』のアラート表示
$('.button').click(function() {
  alert('『クリックしますた』');
});

// 9. 問2で指定したid名「q02」の装飾プロパティを取得して変数q02に代入し、文字の色の値（カラーコード）をid名「#q09」のp要素にテキスト出力
$(function() {
  var q02 = $('#q02').css('color');
  $('#q09').text(q02);
}); 

// 10. 既にclass名「aaa」が付いたid名「#q10」のp要素をクリックしたらclass名を「aaa」→「bbb」に変更
$('#q10').click(function() {
  $(this).toggleClass('bbb');
});

// 11.「#q10」のp要素テキストの先頭に「超平和バスターズ、」を追加せよ（※「めんま、」は書き換えず残したままで）
$(function() {
  $('#q10').prepend('超平和バスターズ、');
});

// 12.「#q10」のp要素テキストの末尾に「じんたん、ゆきあつ、つるこ、あなる、ぽっぽ」を追加せよ（※「超平和バスターズ、」「めんま、」は書き換えず残したままで）
$(function(){
  $('#q10').append('じんたん、ゆきあつ、つるこ、あなる、ぽっぽ');
});

// 13.ul要素のliタグの前にliタグで『飛べない』を追加
$(function(){
  $('#q13 li').before('<li>『飛べない』</li>');
});

// 14.問13のliタグの最後にliタグで『ただの豚』を追加
$(function(){
  $('#q13 li').eq(-1).after('<li>『ただの豚』</li>');
});

// 15. pタグ「あああ」をID名q15のdiv要素の最初に追加
$(function() {
  // $('#q15').prepend('<p>あああ</p>');
  $('<p>あああ</p>').prependTo('#q15');
});

// 16. pタグ「ううう」をID名q15のdiv要素の最後に追加
$(function(){
  // $('#q15').append('<p>ううう</p>');
  $('<p>ううう</p>').appendTo('#q15');
});

// 17. pタグ「ききき」をid名「q17」のdiv要素の前に差し込む
$(function(){
  // $('#q17').before('<p>ききき</p>')
  $('<p>ききき</p>').insertBefore('#q17');
});

// 18. pタグ「くくく」をid名「q17」のdiv要素の後に差し込む
$(function(){
  $('<p>くくく</P>').insertAfter('#q17');
});

// 19. id名q19の要素をclass名「ccc」のdiv要素で囲む
$('#q19').wrap('<div class="ccc"></div>');


// 20. id名「q20」要素の親要素class名「ccc」を取り除きなさい
// ※remove()関数やhide()関数は使用しない事
$(function() {
  $('#q20').unwrap();
});

// 21. class名「q21」が付く要素をclass名「ddd」のdiv要素の中にすべて囲む
$(function() {
  $('.q21').wrapAll('<div class="ddd"></div>');
});

// 22. class名「q22」が付くすべての要素内テキストをclass名「ddd」のdiv要素で囲む
$(function() {
  $('.q22').wrapInner('<div class="ddd"></div>');
});

// 23. class名「q23」が付くすべての要素すべてを「xxx」のp要素に置き換える
$(function() {
  $('.q23').replaceWith('<p>xxx</p>');
});

// 24.class名「q24」要素のclass名を「q24_a」に書き換える
$(function(){
  $('.q24').attr('class','q24_a');
});

// 25. class名「q25」が付いている要素のaタグのhref属性を削除
$(function() {
  $('.q25 a').removeAttr('href');
});

// 26. class名「q26」が付いている要素のaタグに別窓表示の属性を追加
$(function() {
  $('.q26 a').attr('target','_blank');
});

// 27. class名「q27_a」要素をclass名「q27_b」に切り替える
$(function() {
  $('.q27_a').on('click',(function() {
    $(this).toggleClass('q27_b');
  }));
});

// 28. フォームに入力値を「入力してください」に書き換える
$(function() {
  $('form input').val('「入力してください」');
});

// 29. id名「q29」の要素をブラウザ上5430px、左800px値の位置で表示
$(function() {
  $('#q29').offset({ 
    top: 5430,
    left: 800
  });
});

// 30. p要素をクリックしたら直下のulの子要素を全て空にせよ ※空のliタグも残さないこと！
$('.button').click(function() {
  $('#q30').empty();
});
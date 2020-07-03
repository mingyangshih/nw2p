<template lang="pug">
  .buyAndTake
    //- 桌機看到的樣子
    .desktopContent
      .title 訂購與取貨
      hr
      .d-flex.flex-column
        input(type="checkbox" id="first").d-none
        .d-flex.labelContent
          label(for="first").mb-0.plus.mr-3 +
          label(for="first").mb-0.minus.mr-3 -
          label(for="first").destitle.mb-0 Q1：訂購流程說明
        .text-justify.indent.pl-3 A：訂購操作方式
        ol.indent
          li 作品編輯完成後，點選「保存」後，再點選「添加到購物車」。
          li 加入後，會出現「繼續購物」或「現在去付款」。
          li 填寫訂購資料、配送資訊並完成付款。
        .text-justify.indent.pl-3 ※購物車必須是「同一訂購帳號、同一訂單號碼、同一天下單、寄送同一地址」，同筆購物車最多可加入20個作品一併結帳，但所有商品會依據工作天數較長的商品出貨日統一寄出。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="two").d-none
        .d-flex.labelContent
          label(for="two").mb-0.plus.mr-3 +
          label(for="two").mb-0.minus.mr-3 -
          label(for="two").destitle.mb-0 Q2：付款方式有哪些?
        .text-justify.indent.pl-3 A：您可以選用信用卡付費、ATM 轉帳或臨櫃匯款。

        .text-justify.indent.pl-3 1. 信用卡付費：目前接受 VISA、Master Card、JCB Card 信用卡，使用線上付款，以台幣支付「一次付清」。
        .text-justify.indent.pl-3 2. ATM 轉帳或臨櫃匯款：
        .text-justify.indent.pl-3 戶名：永豐紙業股份有限公司
        .text-justify.indent.pl-3 銀行代號：812「台新銀行-南松山分行」
        .text-justify.indent.pl-3 銀行帳號：08201071032700
        .text-justify.indent.pl-3 需告知櫃台服務人員此帳號為虛擬帳號，並匯入與訂單相同金額(勿自行扣匯費)。
        .text-justify.indent.pl-3 匯款後請來信 services@cloudw2p.com 告知轉帳資訊：
        .text-justify.indent.pl-3 訂單編號：
        .text-justify.indent.pl-3 轉帳日期：
        .text-justify.indent.pl-3 轉帳金額：
        .text-justify.indent.pl-3 轉帳帳號後五碼：  (臨櫃匯款,請提供匯款人姓名)
        .text-justify.indent.pl-3 ※ ATM 轉帳：「請於訂購日起，七日內需完成轉帳並Email回覆告知」，在未確認收到款項之前，此筆訂單尚未正式成立。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="three").d-none
        .d-flex.labelContent
          label(for="three").mb-0.plus.mr-3 +
          label(for="three").mb-0.minus.mr-3 -
          label(for="three").destitle.mb-0 Q3：如何知道「轉帳」是否成功？
        .text-justify.indent.pl-3 A：說明如下：
        .text-justify.indent.pl-3 1.轉帳完成後，請來信 services@cloudw2p.com 告知轉帳資訊，以便為您核對。
        .text-justify.indent.pl-3 永豐雲端印刷網會在收到您的轉帳通知，確認帳款後您可在轉帳完成之後的下一個工作天，直接至訂單查詢中，查詢該筆訂單狀況。
        .text-justify.indent.pl-3 ※ 如為假日轉帳，將於工作日確認款項。
        .text-justify.indent.pl-3 2. 對帳完成後即訂單成立，在「我的帳戶」內「您的訂單」中，訂單狀態會顯示「收到付款」。
        .text-justify.indent.pl-3 ※ 確認繳費成功前請保留 ATM 交易明細表以保障您的權益。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="four").d-none
        .d-flex.labelContent
          label(for="four").mb-0.plus.mr-3 +
          label(for="four").mb-0.minus.mr-3 -
          label(for="four").destitle.mb-0 Q4：若刷卡失敗或想更改付款方式，要如何進行結帳?
        .text-justify.indent.pl-3 A：訂單刷卡失敗，此筆訂單將不成立，建議您到「我的作品」重新操作訂購流程，選擇您方便的付款方式進行繳款。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="five").d-none
        .d-flex.labelContent
          label(for="five").mb-0.plus.mr-3 +
          label(for="five").mb-0.minus.mr-3 -
          label(for="five").destitle.mb-0 Q5：放入購物車商品可否修改？
        .text-justify.indent.pl-3 A：尚未完成結帳的商品皆可修改或編輯。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="six").d-none
        .d-flex.labelContent
          label(for="six").mb-0.plus.mr-3 +
          label(for="six").mb-0.minus.mr-3 -
          label(for="six").destitle.mb-0 Q6：放入購物車商品可否取消？
        .text-justify.indent.pl-3 A：在購物車中，找到想要取消的商品，點擊作品右上的X圖樣，即可刪除。
        .text-justify.indent.pl-3 ※註：購物車中移除的作品並不會從「我的作品」中消失，您還是可以自「我的作品」再次加入購物車。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="seven").d-none
        .d-flex.labelContent
          label(for="seven").mb-0.plus.mr-3 +
          label(for="seven").mb-0.minus.mr-3 -
          label(for="seven").destitle.mb-0 Q7：我如果只想買一項商品，應該怎麼做？
        .text-justify.indent.pl-3 A：在購物車清單中，多樣或是單樣商品都是可以結帳的。另外，在編輯器中，點擊右上角「添加到購物車」也會自動將作品加入購物車，依照購物車結帳流程完成操作即可。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="eight").d-none
        .d-flex.labelContent
          label(for="eight").mb-0.plus.mr-3 +
          label(for="eight").mb-0.minus.mr-3 -
          label(for="eight").destitle.mb-0 Q8：使用購物車的東西會一起收到嗎？
        .text-justify.indent.pl-3 A：購物車的功能主要是為了方便您一次購買多樣商品的便利結帳工具，所有商品會依據工作天較長的商品出貨日統一寄出。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="nine").d-none
        .d-flex.labelContent
          label(for="nine").mb-0.plus.mr-3 +
          label(for="nine").mb-0.minus.mr-3 -
          label(for="nine").destitle.mb-0 Q9：使用購物車，發票是開成一張嗎？
        .text-justify.indent.pl-3 A：是的，購物車結帳只會產生一筆訂單，只會有一張發票。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="ten").d-none
        .d-flex.labelContent
          label(for="ten").mb-0.plus.mr-3 +
          label(for="ten").mb-0.minus.mr-3 -
          label(for="ten").destitle.mb-0 Q10：已使用購物車結帳商品，可否取消其中一筆？
        .text-justify.indent.pl-3 A：無法取消其中一筆，因使用購物車的多筆訂單，為了要讓您節省轉帳手續費，只會有一組轉帳帳號，由於每組虛擬帳號都是針對當次交易產生的，因此轉帳時金額與帳號必須與帳號產生時相同，所以使用ATM付款的多筆訂單，在付款之前不能只取消其中一筆，否則根據銀行規定，金額與虛擬帳號不符時，轉帳時將無法轉帳成功，會造成無法完成其他訂單的付款，而影響您其他訂單的付款、出貨等的作業。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="eleven").d-none
        .d-flex.labelContent
          label(for="eleven").mb-0.plus.mr-3 +
          label(for="eleven").mb-0.minus.mr-3 -
          label(for="eleven").destitle.mb-0 Q11：購物車內的作品，保存期限有多長？
        .text-justify.indent.pl-3 A：購物車內的作品等同「我的作品」，編輯期限是由最新的編輯日起算，如果您超過60天未編輯作品，系統會自動將購物車作品移除。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twelve").d-none
        .d-flex.labelContent
          label(for="twelve").mb-0.plus.mr-3 +
          label(for="twelve").mb-0.minus.mr-3 -
          label(for="twelve").destitle.mb-0 Q12：配送方式
        .text-justify.indent.pl-3 A：配送方式：【宅配】。線上下單付款後，依商品規定製作天數內，包裝完成並寄出。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="thirteen").d-none
        .d-flex.labelContent
          label(for="thirteen").mb-0.plus.mr-3 +
          label(for="thirteen").mb-0.minus.mr-3 -
          label(for="thirteen").destitle.mb-0 Q13：訂購付款後多久會收到商品？
        .text-justify.indent.pl-3 A：下單付款後，依照每項商品所規定的製作天數內，包裝完成並寄出。( 週一到週五，不含例假日及國定假日 )。
        .text-justify.indent.pl-3 ※ 如為特定活動提供的產品，則以活動規定為優先。
        .text-justify.indent.pl-3 相片書系列：9個工作天
        .text-justify.indent.pl-3 卡片系列：5個工作天
        .text-justify.indent.pl-3 生活雜貨：10個工作天
        .text-justify.indent.pl-3 便利科技：10個工作天
        .text-justify.indent.pl-3 衣料織品：帆布袋7個工作天、T恤10個工作天
      hr
      .d-flex.flex-column
        input(type="checkbox" id="fourteen").d-none
        .d-flex.labelContent
          label(for="fourteen").mb-0.plus.mr-3 +
          label(for="fourteen").mb-0.minus.mr-3 -
          label(for="fourteen").destitle.mb-0 Q14：商品可以提早出貨嗎?
        .text-justify.indent.pl-3 A：由於永豐雲端印刷網的商品都是收到結帳後的訂單再進行印製，商品皆有一定的製作時程，因此恕不接受急件。請您參照商品製作工作天數，提前訂購。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="fifteen").d-none
        .d-flex.labelContent
          label(for="fifteen").mb-0.plus.mr-3 +
          label(for="fifteen").mb-0.minus.mr-3 -
          label(for="fifteen").destitle.mb-0 Q15：訂單成立後，可否取消或更改訂單數量及商品?
        .text-justify.indent.pl-3 A：系統收到您的付款成功訊息後，即進入製作階段，無法再進行訂單內容變更。若仍有疑問，請寄信至客服信箱( services@cloudw2p.com )或來電客服中心，將有專人為您處理。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="sisteen").d-none
        .d-flex.labelContent
          label(for="sisteen").mb-0.plus.mr-3 +
          label(for="sisteen").mb-0.minus.mr-3 -
          label(for="sisteen").destitle.mb-0 Q16：客戶忘記轉帳帳號如何查詢
        .text-justify.indent.pl-3 1. 訂購完成後系統會發出訂單確認信，到您的帳號信箱即可查看匯款資訊。
        .text-justify.indent.pl-3 2. ATM 轉帳或臨櫃匯款：
        .text-justify.indent.pl-3 戶名：永豐紙業股份有限公司
        .text-justify.indent.pl-3 銀行代號：812「台新銀行-南松山分行」
        .text-justify.indent.pl-3 08201071032700
        .text-justify.indent.pl-3 匯款後請來信 services@cloudw2p.com 告知轉帳資訊：
        .text-justify.indent.pl-3 (1)訂單編號：
        .text-justify.indent.pl-3 (2)轉帳日期：
        .text-justify.indent.pl-3 (3)轉帳金額：
        .text-justify.indent.pl-3 (4)轉帳帳號後五碼：  (臨櫃匯款,請提供匯款人姓名)
        .text-justify.indent.pl-3 ※ ATM 轉帳：「請於訂購日起，七日內需完成轉帳並Email回覆告知」，在未確認收到款項之前，此筆訂單尚未正式成立。
      hr
    //- mobile看到的樣子
    .mobileContent
      .title.mb-3 訂購與取貨
      .px-0
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakefirst").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakefirst").mb-0.plus.mr-3 +
            //- label(for="buyAndTakefirst").mb-0.minus.mr-3 -
            label(for="buyAndTakefirst").destitle.mb-0 Q1：訂購流程說明
          .text-justify.indent.pl-0.ml-0 A：訂購操作方式
          ol.indent.pl-0.ml-3
            li 作品編輯完成後，點選「保存」後，再點選「添加到購物車」。
            li 加入後，會出現「繼續購物」或「現在去付款」。
            li 填寫訂購資料、配送資訊並完成付款。
          .text-justify.indent.pl-0.ml-0 ※購物車必須是「同一訂購帳號、同一訂單號碼、同一天下單、寄送同一地址」，同筆購物車最多可加入20個作品一併結帳，但所有商品會依據工作天數較長的商品出貨日統一寄出。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTaketwo").d-none
          .d-flex.labelContent
            //- label(for="buyAndTaketwo").mb-0.plus.mr-3 +
            //- label(for="buyAndTaketwo").mb-0.minus.mr-3 -
            label(for="buyAndTaketwo").destitle.mb-0 Q2：付款方式有哪些?
          .text-justify.indent.pl-0.ml-0 A：您可以選用信用卡付費、ATM 轉帳或臨櫃匯款。
          .text-justify.indent.pl-0.ml-0 1. 信用卡付費：目前接受 VISA、Master Card、JCB Card 信用卡，使用線上付款，以台幣支付「一次付清」。
          .text-justify.indent.pl-0.ml-0 2. ATM 轉帳或臨櫃匯款：
          .text-justify.indent.pl-0.ml-0 戶名：永豐紙業股份有限公司
          .text-justify.indent.pl-0.ml-0 銀行代號：812「台新銀行-南松山分行」
          .text-justify.indent.pl-0.ml-0 銀行帳號：08201071032700
          .text-justify.indent.pl-0.ml-0 匯款後請來信 services@cloudw2p.com 告知轉帳資訊：
          .text-justify.indent.pl-0.ml-0 (1)訂單編號：
          .text-justify.indent.pl-0.ml-0 (2)轉帳日期：
          .text-justify.indent.pl-0.ml-0 (3)轉帳金額：
          .text-justify.indent.pl-0.ml-0 (4)轉帳帳號後五碼：  (臨櫃匯款,請提供匯款人姓名)
          .text-justify.indent.pl-0.ml-0 ※ ATM 轉帳：「請於訂購日起，七日內需完成轉帳並Email回覆告知」，在未確認收到款項之前，此筆訂單尚未正式成立。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakethree").d-none
          .d-flex.labelContent
            label(for="buyAndTakethree").destitle.mb-0 Q3：如何知道「轉帳」是否成功？
          .text-justify.indent.pl-0.ml-0 A：說明如下
          .text-justify.indent.pl-0.ml-0 1.轉帳完成後，請來信 services@cloudw2p.com 告知轉帳資訊，以便為您核對。
          .text-justify.indent.pl-0.ml-0 永豐雲端印刷網會在收到您的轉帳通知，確認帳款後您可在轉帳完成之後的下一個工作天，直接至訂單查詢中，查詢該筆訂單狀況。
          .text-justify.indent.pl-0.ml-0 ※ 如為假日轉帳，將於工作日確認款項。
          .text-justify.indent.pl-0.ml-0 2.對帳完成後即訂單成立，在「我的帳戶」內「您的訂單」中，訂單狀態會顯示「收到付款」。
          .text-justify.indent.pl-0.ml-0 ※ 確認繳費成功前請保留 ATM 交易明細表以保障您的權益。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakefour").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakefour").mb-0.plus.mr-3 +
            //- label(for="buyAndTakefour").mb-0.minus.mr-3 -
            label(for="buyAndTakefour").destitle.mb-0 Q4：若刷卡失敗或想更改付款方式，要如何進行結帳?
          .text-justify.indent.pl-0.ml-0 A：訂單刷卡失敗，此筆訂單將不成立，建議您到「我的作品」重新操作訂購流程，選擇您方便的付款方式進行繳款。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakefive").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakefive").mb-0.plus.mr-3 +
            //- label(for="buyAndTakefive").mb-0.minus.mr-3 -
            label(for="buyAndTakefive").destitle.mb-0 Q5：放入購物車商品可否修改？
          .text-justify.indent.pl-0.ml-0 A：尚未完成結帳的商品皆可修改或編輯。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakesix").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakesix").mb-0.plus.mr-3 +
            //- label(for="buyAndTakesix").mb-0.minus.mr-3 -
            label(for="buyAndTakesix").destitle.mb-0 Q6：放入購物車商品可否取消？
          .text-justify.indent.pl-0.ml-0 A：在購物車中，找到想要取消的商品，點擊作品右上的X圖樣，即可刪除。
          .text-justify.indent.pl-0.ml-0 ※註：購物車中移除的作品並不會從「我的作品」中消失，您還是可以自「我的作品」再次加入購物車。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakeseven").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakseven").mb-0.plus.mr-3 +
            //- label(for="buyAndTakseven").mb-0.minus.mr-3 -
            label(for="buyAndTakeseven").destitle.mb-0 Q7：我如果只想買一項商品，應該怎麼做？
          .text-justify.indent.pl-0.ml-0 A：在購物車清單中，多樣或是單樣商品都是可以結帳的。另外，在編輯器中，點擊右上角「添加到購物車」也會自動將作品加入購物車，依照購物車結帳流程完成操作即可。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakeeight").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakeeight").mb-0.plus.mr-3 +
            //- label(for="buyAndTakeeight").mb-0.minus.mr-3 -
            label(for="buyAndTakeeight").destitle.mb-0 Q8：使用購物車的東西會一起收到嗎？
          .text-justify.indent.pl-0.ml-0 A：購物車的功能主要是為了方便您一次購買多樣商品的便利結帳工具，所有商品會依據工作天較長的商品出貨日統一寄出。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakenine").d-none
          .d-flex.labelContent
            //- label(for="buyAndTakenine").mb-0.plus.mr-3 +
            //- label(for="buyAndTakenine").mb-0.minus.mr-3 -
            label(for="buyAndTakenine").destitle.mb-0 Q9：使用購物車，發票是開成一張嗎？
          .text-justify.indent.pl-0.ml-0 A：是的，購物車結帳只會產生一筆訂單，只會有一張發票。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTaketen").d-none
          .d-flex.labelContent
            //- label(for="ten").mb-0.plus.mr-3 +
            //- label(for="ten").mb-0.minus.mr-3 -
            label(for="buyAndTaketen").destitle.mb-0 Q10：已使用購物車結帳商品，可否取消其中一筆？
          .text-justify.indent.pl-0.ml-0 A：無法取消其中一筆，因使用購物車的多筆訂單，為了要讓您節省轉帳手續費，只會有一組轉帳帳號，由於每組虛擬帳號都是針對當次交易產生的，因此轉帳時金額與帳號必須與帳號產生時相同，所以使用ATM付款的多筆訂單，在付款之前不能只取消其中一筆，否則根據銀行規定，金額與虛擬帳號不符時，轉帳時將無法轉帳成功，會造成無法完成其他訂單的付款，而影響您其他訂單的付款、出貨等的作業。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakeeleven").d-none
          .d-flex.labelConelevent
            //- label(for="buyAndTakeeleven").mb-0.plus.mr-3 +
            //- label(for="buyAndTakeeleven").mb-0.minus.mr-3 -
            label(for="buyAndTakeeleven").destitle.mb-0 Q11：購物車內的作品，保存期限有多長？
          .text-justify.indent.pl-0.ml-0 A：購物車內的作品等同「我的作品」，編輯期限是由最新的編輯日起算，如果您超過60天未編輯作品，系統會自動將購物車作品移除。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTaketwelve").d-none
          .d-flex.labelConelevent
            //- label(for="buyAndTaketwelve").mb-0.plus.mr-3 +
            //- label(for="buyAndTaketwelve").mb-0.minus.mr-3 -
            label(for="buyAndTaketwelve").destitle.mb-0 Q12：配送方式
          .text-justify.indent.pl-0.ml-0  A：配送方式：【宅配】。線上下單付款後，依商品規定製作天數內，包裝完成並寄出。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakethirteen").d-none
          .d-flex.labelConelevent
            //- label(for="buyAndTakethirteen").mb-0.plus.mr-3 +
            //- label(for="buyAndTakethirteen").mb-0.minus.mr-3 -
            label(for="buyAndTakethirteen").destitle.mb-0 Q13：訂購付款後多久會收到商品？
          .text-justify.indent.pl-0.ml-0 A：下單付款後，依照每項商品所規定的製作天數內，包裝完成並寄出。( 週一到週五，不含例假日及國定假日 )。
          .text-justify.indent.pl-0.ml-0 ※ 如為特定活動提供的產品，則以活動規定為優先。
          .text-justify.indent.pl-0.ml-0 相片書系列：9個工作天
          .text-justify.indent.pl-0.ml-0 卡片系列：5個工作天
          .text-justify.indent.pl-0.ml-0 生活雜貨：10個工作天
          .text-justify.indent.pl-0.ml-0 便利科技：10個工作天
          .text-justify.indent.pl-0.ml-0 衣料織品：帆布袋7個工作天、T恤10個工作天
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakefourteen").d-none
          .d-flex.labelConelevent
            //- label(for="buyAndTakefourteen").mb-0.plus.mr-3 +
            //- label(for="buyAndTakefourteen").mb-0.minus.mr-3 -
            label(for="buyAndTakefourteen").destitle.mb-0 Q14：商品可以提早出貨嗎?
          .text-justify.indent.pl-0.ml-0 A：由於永豐雲端印刷網的商品都是收到結帳後的訂單再進行印製，商品皆有一定的製作時程，因此恕不接受急件。請您參照商品製作工作天數，提前訂購。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakefifteen").d-none
          .d-flex.labelConelevent
            //- label(for="buyAndTakefifteen").mb-0.plus.mr-3 +
            //- label(for="buyAndTakefifteen").mb-0.minus.mr-3 -
            label(for="buyAndTakefifteen").destitle.mb-0 Q15：訂單成立後，可否取消或更改訂單數量及商品?
          .text-justify.indent.pl-0.ml-0 A：系統收到您的付款成功訊息後，即進入製作階段，無法再進行訂單內容變更。若仍有疑問，請寄信至客服信箱( services@cloudw2p.com )或來電客服中心，將有專人為您處理。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="buyAndTakesisteen").d-none
          .d-flex.labelConelevent
            label(for="buyAndTakesisteen").destitle.mb-0 Q16：客戶忘記轉帳帳號如何查詢
          .text-justify.indent.pl-0.ml-0 1.訂購完成後系統會發出訂單確認信，到您的帳號信箱即可查看匯款資訊。
          .text-justify.indent.pl-0.ml-0 2. ATM 轉帳或臨櫃匯款：
          .text-justify.indent.pl-0.ml-0 戶名：永豐紙業股份有限公司
          .text-justify.indent.pl-0.ml-0 銀行代號：812「台新銀行-南松山分行」
          .text-justify.indent.pl-0.ml-0 銀行帳號：08201071032700
          .text-justify.indent.pl-0.ml-0 匯款後請來信 services@cloudw2p.com 告知轉帳資訊：
          .text-justify.indent.pl-0.ml-0 (1)訂單編號：
          .text-justify.indent.pl-0.ml-0 (2)轉帳日期：
          .text-justify.indent.pl-0.ml-0 (3)轉帳金額：
          .text-justify.indent.pl-0.ml-0 (4)轉帳帳號後五碼：(臨櫃匯款,請提供匯款人姓名)
          .text-justify.indent.pl-0.ml-0 ※ ATM 轉帳：「請於訂購日起，七日內需完成轉帳並Email回覆告知」，在未確認收到款項之前，此筆訂單尚未正式成立。
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @media(max-width:641px){
    .desktopContent{
      display: none;
    }
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  @media(min-width:641px){
    .mobileContent{
      display: none;
    }
    .destitle{
      line-height: 18px;
      display: block;
      cursor: pointer;
      &:hover{
        border-bottom: 1px solid black;
      }
    }
  }
  .plus{
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
    &:hover{
      background: #000;
    }
  }
  .minus{
    width: 20px;
    height: 20px;
    background: black;
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
  }
  input:checked ~ .labelContent > .plus{
    display: none;
  }
  input:checked ~ .labelContent > .minus{
    display: flex;
  }
  .indent{
    display: none;
    margin-left: 1.6rem;
    // text-indent: -1.6rem;
    margin-top: 16px;
  }
  input:checked ~ .indent{
    display: initial;
  }
  input ~ .imgBox{
    display: none;
  }
  input:checked ~ .imgBox{
    display: flex;
    max-width: 980px;
  }
  @media(max-width: 641px){
    input:checked ~ .imgBox{
      display: initial;
      max-width: 100%;
    }
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    max-width:550px;
  }
</style>

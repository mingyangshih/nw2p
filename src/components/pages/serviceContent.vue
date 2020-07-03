<template lang="pug">
  .serviceContent.mt-30
    alert
    //- 桌機看到的樣子
    .container
      .row
        .col-md-2.desktop
          .d-flex.flex-column
            //- p.d-flex.justify-content-between.align-items-center 關於會員 <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent" :class="{'text-primary': active === '編輯教學'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '編輯教學'">編輯教學</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/aboutMember" :class="{'text-primary': active === '關於會員'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '關於會員'">關於會員</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/workslayout" :class="{'text-primary': active === '作品編排'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '作品編排'">作品編排須知</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/buyAndTake" :class="{'text-primary': active === '訂購與取貨'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '訂購與取貨'">訂購與取貨</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/invoiceAndSaledService" :class="{'text-primary': active === '發票與售後服務'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '發票與售後服務'">發票與售後服務</span> <i class="fas fa-chevron-right"></i>
            router-link(to="/serviceContent/contactus" :class="{'text-primary': active === '客服信箱'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '客服信箱'">客服信箱</span> <i class="fas fa-chevron-right"></i>
        //- mobile
        .col-md-2.mobile
          .d-flex.flex-column
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent'" @click="showDropDown = !showDropDown;") 編輯教學 <i class="fas fa-chevron-down" v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/aboutMember'" @click="showDropDown = !showDropDown") 關於會員 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/workslayout'" @click="showDropDown = !showDropDown") 作品編排須知 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/buyAndTake'" @click="showDropDown = !showDropDown") 訂購與取貨 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/invoiceAndSaledService'" @click="showDropDown = !showDropDown") 發票與售後服務 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>
            .mb-3.d-flex.justify-content-between.align-items-cetner(v-if="serviceContentDrop === '#/serviceContent/contactus'" @click="showDropDown = !showDropDown") 客服信箱 <i class="fas fa-chevron-down"  v-if="!showDropDown"></i> <i class="fas fa-chevron-up" v-if="showDropDown"></i>

          .d-flex.flex-column.dropDown.border-bottom.mb-3(:class="{'show':showDropDown}" style="boder-color:rgba(0,0,0,0.5)")
            div(@click="$router.push('/serviceContent'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent' " v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent', 'text-gray': serviceContentDrop !== '#/serviceContent'}").mb-3.d-flex.justify-content-between.align-items-center.link <span @click="active= '編輯教學'">編輯教學</span>
            div(@click="$router.push('/serviceContent/aboutMember'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/aboutMember'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/aboutMember', 'text-gray': serviceContentDrop !== '#/serviceContent/aboutMember'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '關於會員'">關於會員</span>
            div(@click="$router.push('/serviceContent/workslayout'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/workslayout'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/workslayout', 'text-gray': serviceContentDrop !== '#/serviceContent/workslayout'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '作品編排'">作品編排須知</span>
            div(@click="$router.push('/serviceContent/buyAndTake'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/buyAndTake'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/buyAndTake', 'text-gray': serviceContentDrop !== '#/serviceContent/buyAndTake'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '訂購與取貨'">訂購與取貨</span>
            div(@click="$router.push('/serviceContent/invoiceAndSaledService'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/invoiceAndSaledService'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/invoiceAndSaledService', 'text-gray': serviceContentDrop !== '#/serviceContent/invoiceAndSaledService'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '發票與售後服務'">發票與售後服務</span>
            div(@click="$router.push('/serviceContent/contactus'); showDropDown = !showDropDown; $store.state.serviceContentDrop = '#/serviceContent/contactus'" v-if="showDropDown" :class="{'text-dark' : serviceContentDrop === '#/serviceContent/contactus', 'text-gray': serviceContentDrop !== '#/serviceContent/contactus'}").mb-3.d-flex.justify-content-between.align-items-center.text-decoration-none.link <span @click="active= '客服信箱'">客服信箱</span>
        .col-md-10
          router-view
    //- .container.d-none
    //-   #accordionExample.accordion
    //-     .card.border-left-0.border-right-0
    //-       #headingOne.card-header.pl-0(data-toggle='collapse' data-target='#collapseOne')
    //-         h2.mb-0
    //-           .btn.text-decoration-none.text-dark.pl-0
    //-             | 編輯教學
    //-       #collapseOne.collapse(aria-labelledby='headingOne' :class="{'show':location === '#/serviceContent'}")
    //-         .card-body.px-0
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEditoneone" checked).d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEditoneone").mb-0.plus.mr-3 +
    //-               //- label(for="teachEditoneone").mb-0.minus.mr-3 -
    //-               label(for="teachEditoneone").destitle.mb-0 1.點選「我要製作」開啟編輯器並上傳圖片
    //-             .text-justify.indent (1) 點選藍色按鈕「添加圖片並開始」
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/1-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 上傳圖片
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/1-2.jpg").img-fluid.mt-3
    //-             .text-justify.indent (3) 將上傳的照片拖拉到編輯區的圖片框中
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/1-3.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoOne").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoOne").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoOne").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoOne").destitle.mb-0 2-1.開始編輯：左方工具列「圖片」功能說明
    //-             .text-justify.indent (1) 照片排序
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-1-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 圖片管理器
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/2-1-2.jpg").img-fluid.mt-3
    //-             .text-justify.indent (3) 撤銷(復原鍵入) / 重做 / 照片右上角數字 / 總上傳張數
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-1-3.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoTwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoTwo").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoTwo").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoTwo").destitle.mb-0 2-2.開始編輯：上方工具列「編輯工具」功能說明
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-0.jpg").img-fluid.mt-3
    //-             .text-justify.indent (1) 添加圖片框 / 添加文本框(文字框)
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 點選「自動排版」，即跳出下圖視窗，將您上傳的圖片自動編輯到作品。
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-2.jpg").img-fluid.mt-3
    //-             .text-justify.indent (3) 智能指引：編輯的過程中會顯示參考線。
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-3.jpg").img-fluid.mt-3
    //-             .text-justify.indent (4) 頁面版式：選擇版型拖拉到編輯區使用
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-4.jpg").img-fluid.mt-3
    //-             .text-justify.indent (5) 背景：選擇背景拖拉到編輯區使用
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-5.jpg").img-fluid.mt-3
    //-             .text-justify.indent (6) 素材庫：選擇圖示拖拉到編輯區使用
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-6.jpg").img-fluid.mt-3
    //-             .text-justify.indent (7) 蒙版：選擇遮色片效果拖拉到圖片上使用
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-2-7.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoThree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoThree").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoThree").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoThree").destitle.mb-0 2-3. 開始編輯：上方工具列「圖片選項」功能說明
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-0.jpg").img-fluid.mt-3
    //-             .text-justify.indent (1) 效果
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 增強
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-2.jpg").img-fluid.mt-3
    //-             .text-justify.indent (3) 裁剪 / 整理
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-3.jpg").img-fluid.mt-3
    //-             .text-justify.indent (4) 邊界
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-4.jpg").img-fluid.mt-3
    //-             .text-justify.indent (5) 陰影
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-5.jpg").img-fluid.mt-3
    //-             .text-justify.indent (6) 透明度
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-6.jpg").img-fluid.mt-3
    //-             .text-justify.indent (7) 方向
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-7.jpg").img-fluid.mt-3
    //-             .text-justify.indent (8) 形狀
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-8.jpg").img-fluid.mt-3
    //-             .text-justify.indent (9) 尺寸&位置
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-9.jpg").img-fluid.mt-3
    //-             .text-justify.indent (10) 對齊
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-10.jpg").img-fluid.mt-3
    //-             .text-justify.indent (11) 佈置
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-11.jpg").img-fluid.mt-3
    //-             .text-justify.indent (12) 適合
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-3-12.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoFour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoFour").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoFour").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoFour").destitle.mb-0 2-4. 開始編輯：上方工具列「文字選項」功能說明
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-0.jpg").img-fluid.mt-3
    //-             .text-justify.indent (1) 文本編輯
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 文本格式
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-2.jpg").img-fluid.mt-3
    //-             .text-justify.indent (3) 文本對齊
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-3.jpg").img-fluid.mt-3
    //-             .text-justify.indent (4) 邊界
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-4.jpg").img-fluid.mt-3
    //-             .text-justify.indent (5) 背景
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-5.jpg").img-fluid.mt-3
    //-             .text-justify.indent (6) 輪流
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-6.jpg").img-fluid.mt-3
    //-             .text-justify.indent (7) 文本方向
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-4-7.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoFive").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoFive").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoFive").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoFive").destitle.mb-0 2-5. 開始編輯：右方工具列「編輯器」功能說明
    //-             .text-justify.indent (1)  剪下         (2)  複製         (3)  貼上         (4)  刪除
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-5.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEdittwoSix").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEdittwoSix").mb-0.plus.mr-3 +
    //-               //- label(for="teachEdittwoSix").mb-0.minus.mr-3 -
    //-               label(for="teachEdittwoSix").destitle.mb-0 2-6. 開始編輯：下方工具列「頁次管理」功能說明
    //-             ol.indent
    //-               li 總頁數：下拉可以更改可訂購頁數。(可訂購頁數分別為36、48、60、72、84頁)
    //-               li 插入頁：插入頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
    //-               li 刪除頁：刪除頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
    //-               li 頁次：可以拖拉更換頁面順序。
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/2-6.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEditthreeThree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEditthreeThree").mb-0.plus.mr-3 +
    //-               //- label(for="teachEditthreeThree").mb-0.minus.mr-3 -
    //-               label(for="teachEditthreeThree").destitle.mb-0 3. 編輯完成進行訂購
    //-             .text-justify.indent (1) 點選右上角「添加到購物車」即可進行結帳
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/3.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="teachEditfourFour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="teachEditfourFour").mb-0.plus.mr-3 +
    //-               //- label(for="teachEditfourFour").mb-0.minus.mr-3 -
    //-               label(for="teachEditfourFour").destitle.mb-0 4. 上方工具列「作品管理」功能說明
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/4-0.jpg").img-fluid.mt-3
    //-             .text-justify.indent (1) 分享：您可以複製連結到您社群網站分享作品
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/4-1.jpg").img-fluid.mt-3
    //-             .text-justify.indent (2) 簡單編輯：可切換到簡單模式編輯
    //-             .text-justify.indent (3) 保存：輸入作品名稱及可儲存作品
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/4-3.jpg").img-fluid.mt-3
    //-             .text-justify.indent (4) 預覽
    //-             .imgBox
    //-               img(src="../../assets/img/serviceContent/4-4.jpg").img-fluid.mt-3
    //-             .text-justify.indent (5) 各國語言切換
    //-             .imgBox(style="width:100%")
    //-               img(src="../../assets/img/serviceContent/4-5.jpg").img-fluid.mt-3
    //-     .card.border-left-0.border-right-0.border-bottom
    //-       #headingTwo.card-header.pl-0(data-toggle='collapse' data-target='#collapseTwo')
    //-         h2.mb-0
    //-           .btn.collapsed.text-decoration-none.text-dark.pl-0
    //-             | 關於會員
    //-       #collapseTwo.collapse(aria-labelledby='headingTwo' data-parent='#accordionExample' :class="{'show':location === '#/serviceContent/aboutMember'}")
    //-         .card-body.px-0
    //-           //- aboutMember
    //-           .d-flex.flex-column
    //-             input(id="aboutMemberfirst" type="checkbox").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="aboutMemberfirst").mb-0.plus.mr-3 +
    //-               //- label(for="aboutMemberfirst").mb-0.minus.mr-3 -
    //-               label(for="aboutMemberfirst").destitle.mb-0 Q1：如何加入會員？
    //-             .text-justify.indent.pl-0 A：在永豐雲端印刷網網站首頁上，點選「註冊」輸入個人基本資料（個人電子信箱、密碼、手機號碼等資料）後，立即成為會員。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMembertwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="aboutMembertwo").mb-0.plus.mr-3 +
    //-               //- label(for="aboutMembertwo").mb-0.minus.mr-3 -
    //-               label(for="aboutMembertwo").destitle.mb-0 Q2：沒有加入會員可以編輯作品嗎?
    //-             .text-justify.indent.pl-0.ml-0 A：編輯任何商品無須加入會員，即可體驗編輯。若要購買商品須完成會員註冊才能成立訂單。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMemberthree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="aboutMemberthree").mb-0.plus.mr-3 +
    //-               //- label(for="aboutMemberthree").mb-0.minus.mr-3 -
    //-               label(for="aboutMemberthree").destitle.mb-0 Q3：忘記密碼，怎麼辦？
    //-             .text-justify.indent.pl-0.ml-0 A：步驟如下
    //-             ol.indent.pl-0.ml-0
    //-               li 可由登入頁面，點選「忘記了您的密碼嗎？」。
    //-               li 請在欄位輸入您的電子郵件帳號，按下「發送重置連結」，會將重置連結寄送到您註冊時所使用的 E-mail 信箱；同時畫面會顯示的程式碼(驗證碼) 請記下或複製。
    //-               li 請至您的E-mail信箱，開啟密碼重設確認信，點選「密碼變更」。
    //-               li 輸入程式碼(驗證碼)，即可重置新密碼。
    //-             .text-justify.indent.font-weight-bold.pl-0.ml-0 ※特別說明，因個資保護法條規定，客服人員無法查詢及變更您的密碼，敬請見諒。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMemberfour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="four").mb-0.plus.mr-3 +
    //-               //- label(for="four").mb-0.minus.mr-3 -
    //-               label(for="aboutMemberfour").destitle.mb-0 Q4：收不到永豐雲端印刷網寄來的信，怎麼辦？
    //-             .text-justify.indent.pl-0.ml-0 A：如一直收不到回覆信件，請查明您的垃圾信件夾，並將services@cloudw2p.com 加入通訊錄喔！
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMemberfive").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="five").mb-0.plus.mr-3 +
    //-               //- label(for="five").mb-0.minus.mr-3 -
    //-               label(for="aboutMemberfive").destitle.mb-0 Q5：無法順利「登入」帳戶？
    //-             .text-justify.indent.pl-0.ml-0 請確認您的帳戶/密碼是否正確，並請注意大小寫須符合原設定。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMembersix").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="six").mb-0.plus.mr-3 +
    //-               //- label(for="six").mb-0.minus.mr-3 -
    //-               label(for="aboutMembersix").destitle.mb-0 Q6：會員如何更改帳戶資料或密碼？
    //-             .text-justify.indent.pl-0.ml-0 登入後，點選「我的帳戶」>「帳戶詳細資料」或「變更密碼」，即可重新設定。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="aboutMemberseven").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="seven").mb-0.plus.mr-3 +
    //-               //- label(for="seven").mb-0.minus.mr-3 -
    //-               label(for="aboutMemberseven").destitle.mb-0 Q7：有關會員「版權」與「隱私權」？
    //-             .text-justify.indent.pl-0.ml-0 其「版權所有」依照來源歸屬有其所有者。永豐雲端印刷網官方提供物件：永豐雲端印刷網編輯器中，官方所提供的版型、背景、插圖、文字等，其版權歸雲印網所有。會員提供的物件：由會員自行上傳的照片、圖片、文字等可視為會員所有之物件，其版權為會員或物件產生者所有。
    //-             .text-justify.indent.pl-0.ml-0 ※ 永豐雲端印刷網提醒您，請確認您的物件來源 ( 包含但不限於照片、圖片、文字等 ) 為正當性，若有侵權行為或第三者質疑時，使用者應自負法律責任，與永豐雲端印刷網無關。
    //-             .text-justify.indent.pl-0.ml-0 【會員隱私權保護】相關政策如下：
    //-             ol.indent.pl-0.ml-0
    //-               li 針對會員上傳的照片與圖片並不會顯示於網站上，僅會在個人的編輯器內顯示。因此不會像部落格相簿一樣下載、儲存，而被惡意盜用的情況發生。
    //-               li 在永豐雲端印刷網上分享出來的相簿，網友是無法透過下載方式將會員分享出來的相簿另存檔案的。
    //-               li 作品製作出來後，會員作品著作權屬於會員所有 ( 前提是不違背會員條款所載之事項 )，未經過會員同意，並取得會員相關授權文件的情況下，絕對不會被複製出來用作其他商業用途。
    //-               li 印刷過程中，印刷工廠針對不良品有強制的規範。若發生錯誤而有重製的情況，原不良的印刷品，皆會銷毀不留存確保個人隱私，所以不會有圖片外洩的可能。
    //-               li 針對隱私與著作保護的資訊安全部分，永豐雲端印刷網所屬的公司已經通過 ISO27001 資訊安全管理驗證服務標準並獲得國際認證。( ISO27001詳細介紹 http://en.wikipedia.org/wiki/ISO27001 )
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/ISO-PIC.jpg").img-fluid.mt-3
    //-     .card.border-left-0.border-right-0
    //-       #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseThree')
    //-         h2.mb-0
    //-           .btn.collapsed.text-decoration-none.text-dark.pl-0
    //-             | 作品編排須知
    //-       #collapseThree.collapse(aria-labelledby='headingThree' data-parent='#accordionExample' :class="{'show':location === '#/serviceContent/workslayout'}")
    //-         .card-body.px-0
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutfirst").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutfirst").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutfirst").mb-0.minus.mr-3 -
    //-               label(for="workslayoutfirst").destitle.mb-0 Q1：編輯作品時需要注意什麼事情？
    //-             ol.indent.pl-0.ml-0
    //-               li 畫面中的灰色外框為該商品製作時可能會裁切或裝訂的出血(裁切)範圍，文字不可超出或接近黑色外框線，以免被裁切掉，請將重要圖文避開此區。
    //-               li 相片書產品內頁編排勿靠近中線頁面內側(此為裝訂處)以免被裁切或不易閱讀。
    //-               li 編輯時如需滿版或靠齊邊緣，照片必須超出黑色外框線並填滿灰色區域，成品才不會露出白邊。
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/作品編排須知Q01.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="highlowtwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutfirst").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutfirst").mb-0.minus.mr-3 -
    //-               label(for="highlowtwo").destitle.mb-0 Q2：「高級編輯」和「簡單編輯」的差異？
    //-             .text-justify.indent.pl-0.ml-0 A：高級編輯：適用「電腦版」，編輯功能較豐富。
    //-             .text-justify.indent.pl-0.ml-0 簡單編輯：適用「電腦版」和「手機版」。因手機裝置的螢幕寬度限制，若使用手機編排作品僅限使用簡單編輯。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayouttwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayouttwo").mb-0.plus.mr-3 +
    //-               //- label(for="workslayouttwo").mb-0.minus.mr-3 -
    //-               label(for="workslayouttwo").destitle.mb-0 Q3：如何知道圖片解析度夠不夠？
    //-             .text-justify.indent.pl-0.ml-0 A：請您將上傳的圖片拉進編輯區或圖片框內，若圖片框出現驚嘆號圖示就表示圖片解析度不足，會影響印刷成品，建議您更換圖片或縮小圖片至驚嘆號圖示消失，亦表示解析度足夠。
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/作品編排須知Q02.jpg").img-fluid.mt-3
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutthree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutthree").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutthree").mb-0.minus.mr-3 -
    //-               label(for="workslayoutthree").destitle Q4圖片可以使用哪些檔案格式和色彩模式？
    //-             .text-justify.indent.pl-0.ml-0 A：可以上傳JPG、JPEG、PNG、TIFF的影像檔案格式；RGB或CMYK的色彩模式皆可上傳。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutfour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutfour").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutfour").mb-0.minus.mr-3 -
    //-               label(for="workslayoutfour").destitle Q5：同一個作品可以不同的行動裝置上編輯嗎？
    //-             .text-justify.indent.pl-0.ml-0 A：可以。只要有確定儲存作品就可以在不同的行動裝置(如手機、平板、電腦)登入繼續編輯。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutfive").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutfive").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutfive").mb-0.minus.mr-3 -
    //-               label(for="workslayoutfive").destitle Q6：未編輯完成的作品，可以之後繼續編輯嗎？
    //-             .text-justify.indent.pl-0.ml-0 A：未編輯完成的作品，請點選「保存」，若您尚未加入會員，請依步驟註冊，註冊完成作品將會儲存在「我的作品」內。若您已成為本站會員，請登入會員帳號，即可將作品儲存。若要繼續編輯作品時請登入後，可在「我的作品」內，點選作品下方的「編輯」按鈕。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutsix").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutsix").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutsix").mb-0.minus.mr-3 -
    //-               label(for="workslayoutsix").destitle Q7：編輯時的操作反應很慢？
    //-             .text-justify.indent.pl-0.ml-0 A：因本站使用的是即時線上編輯器，主要的原因與您當下的網路速度及網路環境有關。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutseven").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutseven").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutseven").mb-0.minus.mr-3 -
    //-               label(for="workslayoutseven").destitle Q8：使用手機編輯作品時，為何不能調整相片框位置及大小或增加文字及插圖？
    //-             .text-justify.indent.pl-0.ml-0 A：因手機版瀏覽裝置限制僅能支援「簡易編輯」，請您使用電腦或平板裝置編輯作品，即可使用「進階編輯」操作上列功能。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayouteight").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayouteight").mb-0.plus.mr-3 +
    //-               //- label(for="workslayouteight").mb-0.minus.mr-3 -
    //-               label(for="workslayouteight").destitle Q9：我可以分享完成訂購的作品嗎？
    //-             .text-justify.indent.pl-0.ml-0 A：請您登入後，點選「我的帳戶」>「您的訂單」，選擇欲分享的作品並點選「分享」即可透過各種平台分享給您的朋友。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayoutnine").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayoutnine").mb-0.plus.mr-3 +
    //-               //- label(for="workslayoutnine").mb-0.minus.mr-3 -
    //-               label(for="workslayoutnine").destitle Q10：上傳圖片過程中可否停止上傳或刪除圖片?
    //-             .text-justify.indent.pl-0.ml-0 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
    //-             .text-justify.indent.pl-0.ml-0  簡單編輯：在圖片區選擇不要的照片，再點選該照片左上角的箭頭，即出現「清除」選項。
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/簡單編輯.jpg").img-fluid.mt-4
    //-             .text-justify.indent.pl-0.ml-0 高級編輯：可點開圖片管理器後選擇不要的照片，再點選右上方的垃圾桶刪除即可。
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/高級編輯01.jpg").img-fluid.mt-4
    //-             .imgBox.justify-content-center
    //-               img(src="../../assets/img/serviceContent/高級編輯02.jpg").img-fluid.mt-4
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="workslayouten").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="workslayouten").mb-0.plus.mr-3 +
    //-               //- label(for="workslayouten").mb-0.minus.mr-3 -
    //-               label(for="workslayouten").destitle Q11：「色差」說明？
    //-             .text-justify.indent.pl-0.ml-0 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
    //-             .text-justify.indent.pl-0.ml-0 關於色彩差異部分，因每台螢幕設定的色彩明亮及品牌皆不同，不同螢幕看同一張照片或圖片，會呈現不同顏色，電腦顯示的色彩模式為RGB，印刷品的色彩模式為CMYK，顯示的色域有差異會有一定的色差，間接造成印刷成品與螢幕上有所差異。
    //-             .text-justify.indent.pl-0.ml-0 印刷品皆屬影像複製，影響色彩呈現的原因有油墨、紙張、色彩曲線、時間、機台等等，所以同一圖檔在不同次印刷時，色彩都會有些微差距，有色差皆屬正常。就如同沖印相片即使到同一個相館，不同天洗出來，色彩亦有差異一樣，即使大量同時印刷，前後時段印出的產品，也會略有差異，這是色彩複製一定會有的問題，詳情請參閱國際膠印印刷標準ISO12647-2。
    //-     .card.border-left-0.border-right-0
    //-       #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseFour')
    //-         h2.mb-0
    //-           .btn.collapsed.text-decoration-none.text-dark.pl-0
    //-             | 訂購與取貨
    //-       #collapseFour.collapse(aria-labelledby='headingThree' data-parent='#accordionExample' :class="{'show' : location === '#/serviceContent/buyAndTake'}")
    //-         .card-body.px-0
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakefirst").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakefirst").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakefirst").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakefirst").destitle.mb-0 Q1：訂購流程說明
    //-             .text-justify.indent.pl-0.ml-0 A：訂購操作方式
    //-             ol.indent.pl-0.ml-0
    //-               li 作品編輯完成後，點選「保存」後，再點選「添加到購物車」。
    //-               li 加入後，會出現「繼續購物」或「現在去付款」。
    //-               li 填寫訂購資料、配送資訊並完成付款。
    //-             .text-justify.indent.pl-0.ml-0 ※購物車必須是「同一訂購帳號、同一訂單號碼、同一天下單、寄送同一地址」，同筆購物車最多可加入20個作品一併結帳，但所有商品會依據工作天數較長的商品出貨日統一寄出。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTaketwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTaketwo").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTaketwo").mb-0.minus.mr-3 -
    //-               label(for="buyAndTaketwo").destitle.mb-0 Q2：付款方式有哪些?
    //-             .text-justify.indent.pl-0.ml-0 A：您可以選用信用卡付費、ATM 轉帳或臨櫃匯款。
    //-             ol.indent.pl-0.ml-0
    //-               li 信用卡付費：目前接受 VISA 信用卡、Master Card 信用卡、JCB Card 信用卡或 NCCC 信用卡，使用信用線上付款，以台幣支付「一次付清」。
    //-               li 轉帳匯款：
    //-                 ol
    //-                   li ATM 轉帳：「請於訂購日起，七日內需完成轉帳」，在未確認收到款項之前，此筆訂單尚未正式成立。系統根據您的訂單產生一組專屬於這筆訂單的轉帳帳號，請您根據此組帳號及您購買的總金額進行轉帳即可。
    //-                   li 臨櫃匯款：「請於訂購日起，七日內需完成轉帳」，在未確認收到款項之前，此筆訂單尚未正式成立。
    //-             .text-justify.indent.pl-0.ml-0 戶名：永豐紙業股份有限公司
    //-             .text-justify.indent.pl-0.ml-0 銀行：永豐銀行
    //-             .text-justify.indent.pl-0.ml-0 分行：南門分行
    //-             .text-justify.indent.pl-0.ml-0 帳號：系統根據您的訂單產生一組專屬於這筆訂單的轉帳帳號，請您根據此組帳號及您購買的總金額進行轉帳即可。
    //-             .text-justify.indent.pl-0.ml-0 需告知櫃台服務人員此帳號為虛擬帳號，並匯入與訂單相同金額(勿自行扣匯費)。
    //-             .text-justify.indent.pl-0.ml-0 ※ 如何確認轉帳成功：
    //-             ol.indent
    //-               li 轉帳完成後系統會發出訂單確認的通知信件，到您的帳號信箱。
    //-               li 在我的帳戶內>您的訂單中，訂單狀態會顯示收到付款。
    //-             .text-justify.indent.pl-0.ml-0 ※ 確認繳費成功前請保留 ATM 交易明細表以保障您的權益。
    //-             .text-justify.indent.pl-0.ml-0 ※ 提醒您，若您為海外會員或未持有台灣國內銀行所發行晶片金融卡，請勿選擇 ATM 轉帳付款方式。「ATM 轉帳」僅限台灣國內銀行發行之晶片金融卡，以台幣支付。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakethree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakethree").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakethree").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakethree").destitle.mb-0 Q3：如何知道「轉帳」是否成功？
    //-             .text-justify.indent.pl-0.ml-0 A：永豐雲端印刷網會在收到您的轉帳通知，確認帳款後，發送訂單款項確認 email 到您登錄之會員帳號中，或是您可在轉帳完成之後的下一個工作天，直接至訂單查詢中，查詢該筆訂單狀況。
    //-             .text-justify.indent.pl-0.ml-0 ※ 如為假日轉帳，將於工作日回覆。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakefour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakefour").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakefour").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakefour").destitle.mb-0 Q4：若刷卡失敗或想更改付款方式，要如何進行結帳?
    //-             .text-justify.indent.pl-0.ml-0 A：訂單刷卡失敗，此筆訂單將不成立，建議您到「我的作品」重新操作訂購流程，選擇您方便的付款方式進行繳款。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakefive").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakefive").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakefive").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakefive").destitle.mb-0 Q5：放入購物車商品可否修改？
    //-             .text-justify.indent.pl-0.ml-0 A：尚未完成結帳的商品皆可修改或編輯。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakesix").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakesix").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakesix").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakesix").destitle.mb-0 Q6：放入購物車商品可否取消？
    //-             .text-justify.indent.pl-0.ml-0 A：在購物車中，找到想要取消的商品，點擊作品右上的X圖樣，即可刪除。
    //-             .text-justify.indent.pl-0.ml-0 ※註：購物車中移除的作品並不會從「我的作品」中消失，您還是可以自「我的作品」再次加入購物車。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakeseven").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakseven").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakseven").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakeseven").destitle.mb-0 Q7：我如果只想買一項商品，應該怎麼做？
    //-             .text-justify.indent.pl-0.ml-0 A：在購物車清單中，多樣或是單樣商品都是可以結帳的。另外，在編輯器中，點擊右上角「添加到購物車」也會自動將作品加入購物車，依照購物車結帳流程完成操作即可。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakeeight").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakeeight").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakeeight").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakeeight").destitle.mb-0 Q8：使用購物車的東西會一起收到嗎？
    //-             .text-justify.indent.pl-0.ml-0 A：購物車的功能主要是為了方便您一次購買多樣商品的便利結帳工具，所有商品會依據工作天較長的商品出貨日統一寄出。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakenine").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="buyAndTakenine").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakenine").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakenine").destitle.mb-0 Q9：使用購物車，發票是開成一張嗎？
    //-             .text-justify.indent.pl-0.ml-0 A：是的，購物車結帳只會產生一筆訂單，只會有一張發票。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTaketen").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="ten").mb-0.plus.mr-3 +
    //-               //- label(for="ten").mb-0.minus.mr-3 -
    //-               label(for="buyAndTaketen").destitle.mb-0 Q10：已使用購物車結帳商品，可否取消其中一筆？
    //-             .text-justify.indent.pl-0.ml-0 A：無法取消其中一筆，因使用購物車的多筆訂單，為了要讓您節省轉帳手續費，只會有一組轉帳帳號，由於每組虛擬帳號都是針對當次交易產生的，因此轉帳時金額與帳號必須與帳號產生時相同，所以使用ATM付款的多筆訂單，在付款之前不能只取消其中一筆，否則根據銀行規定，金額與虛擬帳號不符時，轉帳時將無法轉帳成功，會造成無法完成其他訂單的付款，而影響您其他訂單的付款、出貨等的作業。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakeeleven").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTakeeleven").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakeeleven").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakeeleven").destitle.mb-0 Q11：購物車內的商品，保存期限有多長？
    //-             .text-justify.indent.pl-0.ml-0 A：購物車內的商品會為您保留24小時，如超過24小時，系統將會自動將購物車商品移除，不另行通知。此動作不影響原作品的保存。重新訂購請由「我的作品」中將該作品加入購物車。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTaketwelve").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTaketwelve").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTaketwelve").mb-0.minus.mr-3 -
    //-               label(for="buyAndTaketwelve").destitle.mb-0 Q12：配送方式
    //-             .text-justify.indent.pl-0.ml-0  A：配送方式：【宅配】。線上下單付款後，依商品規定製作天數內，包裝完成並寄出。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakethirteen").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTakethirteen").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakethirteen").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakethirteen").destitle.mb-0 Q13：訂購付款後多久會收到商品？
    //-             .text-justify.indent.pl-0.ml-0 A：下單付款後，依照每項商品所規定的製作天數內，包裝完成並寄出。( 週一到週五，不含例假日及國定假日 )。
    //-             .text-justify.indent.pl-0.ml-0 ※ 如為特定活動提供的產品，則以活動規定為優先。
    //-             .text-justify.indent.pl-0.ml-0 相片書系列：9個工作天
    //-             .text-justify.indent.pl-0.ml-0 卡片系列：5個工作天
    //-             .text-justify.indent.pl-0.ml-0 生活雜貨：10個工作天
    //-             .text-justify.indent.pl-0.ml-0 便利科技：10個工作天
    //-             .text-justify.indent.pl-0.ml-0 衣料織品：帆布袋7個工作天、T恤10個工作天
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakefourteen").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTakefourteen").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakefourteen").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakefourteen").destitle.mb-0 Q14：商品可以提早出貨嗎?
    //-             .text-justify.indent.pl-0.ml-0 A：由於永豐雲端印刷網的商品都是收到結帳後的訂單再進行印製，商品皆有一定的製作時程，因此恕不接受急件。請您參照商品製作工作天數，提前訂購。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakefifteen").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTakefifteen").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakefifteen").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakefifteen").destitle.mb-0 Q15：訂單成立後，可否取消或更改訂單數量及商品?
    //-             .text-justify.indent.pl-0.ml-0 A：系統收到您的付款成功訊息後，即進入製作階段，無法再進行訂單內容變更。若仍有疑問，請寄信至客服信箱( services@cloudw2p.com )或來電客服中心，將有專人為您處理。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="buyAndTakesisteen").d-none
    //-             .d-flex.labelConelevent
    //-               //- label(for="buyAndTakesisteen").mb-0.plus.mr-3 +
    //-               //- label(for="buyAndTakesisteen").mb-0.minus.mr-3 -
    //-               label(for="buyAndTakesisteen").destitle.mb-0 Q16：客戶忘記轉帳帳號如何查詢
    //-             ol.indent.pl-0.ml-0.mb-0
    //-               li 轉帳完成後系統會發出訂單確認的通知信件，到您的帳號信箱。
    //-               li 在我的帳戶內>您的訂單中，訂單狀態會顯示收到付款。
    //-     .card.border-left-0.border-right-0
    //-       #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseFive')
    //-         h2.mb-0
    //-           .btn.collapsed.text-decoration-none.text-dark.pl-0
    //-             | 發票與售後服務
    //-       #collapseFive.collapse(aria-labelledby='headingThree' data-parent='#accordionExample' :class="{'show': location === '#/serviceContent/invoiceAndSaledService'}")
    //-         .card-body.pl-0
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicefirst").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicefirst").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicefirst").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicefirst").destitle.mb-0 Q1：如何聯絡我們?
    //-             .text-justify.indent.pl-0.ml-0 A：聯絡資訊
    //-             .text-justify.indent.pl-0 服務時間：週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
    //-             .text-justify.indent.pl-0 客服電話：02-2266-8944 Ext.8800
    //-             .text-justify.indent.pl-0 客服傳真：02-2266-5451
    //-             .text-justify.indent.pl-0 客服信箱：services@cloudw2p.com
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicetwo").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicetwo").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicetwo").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicetwo").destitle.mb-0 Q2：付款後，兩週都未收到商品怎麼辦？
    //-             .text-justify.indent.pl-0.ml-0 A：請登入後，至「我的帳戶」→「您的訂單」中，可查詢訂單狀態。若仍有疑問，請寄信至客服信箱(services@cloudw2p.com，內容註明詢問事項、訂單與聯絡電話)或來電，我們將盡快提供協助。
    //-             .text-justify.indent.pl-0.ml-0 ※ 永豐雲端印刷網將會為會員保留最近三個月的物流相關資料以供查詢。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicethree").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicethree").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicethree").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicethree").destitle.mb-0 Q3：商品「發票」會如何收到?
    //-             .text-justify.indent.pl-0.ml-0 A：如有實體發票，發票會隨商品包裝，附於箱內。
    //-             .text-justify.indent.pl-0.ml-0 若未收到發票，請於客服時間來電或使用客服信箱，並註明內容詢問事項與聯絡電話將有專人為您處理。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicefour").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicefour").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicefour").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicefour").destitle.mb-0 Q4：商品「更換發票三聯式」公司戶的辦法？
    //-             .text-justify.indent.pl-0.ml-0 A：雲端印刷網在訂購流程中均有提供填寫「發票統編」及「抬頭的欄位」，請提供欲換開的抬頭和統編，將此問題 mail 到雲端印刷網的客服信箱 ( services@cloudw2p.com ) 或來電客服中心，將有專人為您處理。
    //-             .text-justify.indent.pl-0.ml-0 ※ 經客服人員確認後，請將收到的發票寄回，內附回郵信封，並註明欲變更的資料，我們將另行為您修改。
    //-             .text-justify.indent.pl-0.ml-0 ※ 寄回地址：236新北市土城區中央路一段365巷7號6樓 永豐雲端印刷網(客服部) 收 ( 一般作業時間約2週，請您稍後 )。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicefive").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicefive").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicefive").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicefive").destitle.mb-0 Q5：客訴或退貨時能否更換製作內容及製作材料？
    //-             .text-justify.indent.pl-0.ml-0 A：因工廠採自動化生產，若更換材料將影響產品正確性及一致性，故無法更換。
    //-           hr
    //-           .d-flex.flex-column
    //-             input(type="checkbox" id="invoiceAndSaledServicesix").d-none
    //-             .d-flex.labelContent
    //-               //- label(for="invoiceAndSaledServicesix").mb-0.plus.mr-3 +
    //-               //- label(for="invoiceAndSaledServicesix").mb-0.minus.mr-3 -
    //-               label(for="invoiceAndSaledServicesix").destitle.mb-0 Q6：如何「退貨」？
    //-             .text-justify.indent.pl-0.ml-0 A：您在永豐雲端印刷網購買的每件商品均屬個人之客製化商品，故不提供七天鑑賞期。非人為惡意損壞之缺頁、掉頁、裝訂錯誤等重大瑕疵，恕不退貨。
    //-             .text-justify.indent.pl-0.ml-0 所訂購商品如發生缺頁、裝訂不良、印刷污損與其他歸責於本公司之情況，請於收到商品的七日內，拍下瑕疵發生情形，將照片及問題mail到客服信箱( services@cloudw2p.com )，本公司將在收到您的問題反應和確認問題歸屬後，視情況提供處理辦法，無故不接受退貨。
    //-             .text-justify.indent.pl-0.ml-0 ※些許色差屬印刷正常現象，彩色印刷是由CMYK四色版套印而成，由於印刷和承印物的特殊性，印刷成品色差值控制在±10%以內均為合格產品，顯示器上視覺顏色和印刷成品顏色均有一定的差異，不同批次的產品也會略有差異，詳情請參閱國際膠印印刷標準ISO12647-2，故色差並不構成退貨要件中的重大瑕疵。
    //-     .card.border-left-0.border-right-0
    //-       #headingThree.card-header.pl-0(data-toggle='collapse' data-target='#collapseSeven')
    //-         h2.mb-0
    //-           .btn.collapsed.text-decoration-none.text-dark.pl-0
    //-             | 客服信箱
    //-       #collapseSeven.collapse(aria-labelledby='headingThree' data-parent='#accordionExample' :class="{'show': location === '#/serviceContent/contactus'}")
    //-         .card-body.pl-0
    //-           .title 客服信箱
    //-           hr
    //-           .d-flex
    //-             .col-3.px-0.d-flex.align-items-start
    //-               p 客服信箱
    //-             .col-10.px-0.d-flex.align-items-start
    //-               p services@cloudw2p.com
    //-           .d-flex
    //-             .col-3.px-0.d-flex.align-items-start
    //-               p 客服時間
    //-             .col-10.px-0.d-flex.align-items-start
    //-               p 週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
    //-           .d-flex.mb-3
    //-             .col-3.px-0.d-flex.align-items-center
    //-               p.mb-0 姓名
    //-             .col-10.px-0.d-flex.flex-column.align-items-start
    //-               input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.name")
    //-               p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.name === '' && emptyInput.indexOf(0) > -1") 此欄位必填
    //-           .d-flex.mb-3
    //-             .col-3.px-0.d-flex.align-items-center
    //-               p.mb-0 電話
    //-             .col-10.px-0.d-flex.flex-column.align-items-start
    //-               input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.phone")
    //-               p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.phone === '' && emptyInput.indexOf(1) > -1") 此欄位必填
    //-           .d-flex.mb-3
    //-             .col-3.px-0.d-flex.align-items-center
    //-               p.mb-0 Email
    //-             .col-10.px-0.d-flex.flex-column.align-items-start
    //-               input.border-dark.form-control.w-95.rounded-0(type="text" v-model="contactInfo.email")
    //-               p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.email === '' && emptyInput.indexOf(2) > -1") 此欄位必填
    //-           .d-flex.mb-3
    //-             .col-3.px-0.d-flex.align-items-center
    //-               p.mb-0 您的留言
    //-             .col-10.px-0.d-flex.flex-column.align-items-start
    //-              textarea(cols="30" rows="10" v-model="contactInfo.message").form-control.w-95.border-dark.rounded-0
    //-              p.mb-0.text-danger.text-right.fz14(v-if="contactInfo.message === '' && emptyInput.indexOf(3) > -1") 此欄位必填
    //-           .d-flex
    //-             img.ml-auto.captchaImg(:src="verifyImg")
    //-           .d-flex.my-3.align-items-center
    //-             .col-3.px-0.d-flex.align-items-center
    //-               p.mb-0 輸入驗證碼
    //-             .col-10.px-0.d-flex.flex-column.align-items-start
    //-               input(type="text" v-model="contactInfo.captcha").form-control.border-dark.w-95.rounded-0
    //-           .d-flex.justify-content-end
    //-             button.btn.btn-primary.font-weight-bold.btnInPage.px-0.py-0.text-decoration-none.rounded-0.mt-3(@click="getImage") 重產驗證碼
    //-           .d-flex.justify-content-end
    //-             button.btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.my-3.text-decoration-none.rounded-0(@click="contactus") 確認送出 <i class="fas fa-chevron-right fa-xs"></i>

</template>

<script>
import {mapActions, mapState} from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import alert from '../alert'
import teachEdit from '../teachEdit'
import aboutMember from '../aboutMember'
const { mapFields } = createHelpers({
  getterType: 'contactusModules/getField',
  mutationType: 'contactusModules/updateField'
})
export default {
  components: {
    alert,
    aboutMember,
    teachEdit
  },
  data () {
    return {
      active: '',
      location: '',
      showDropDown: false
    }
  },
  methods: {
    ...mapActions('contactusModules', [
      'contactus', 'getImage'
    ])
  },
  computed: {
    ...mapFields(['contactInfo', 'emptyInput', 'verifyImg', 'code', 'verifyCode']),
    ...mapState({
      serviceContentDrop: state => state.serviceContentDrop
    })
  },
  created () {
    this.$store.commit('contactusModules/clearContactInfo')
    this.$store.dispatch('contactusModules/getImage')
    this.location = window.location.hash
  },
  mounted () {
    let vm = this
    vm.location = window.location.hash
  }
}
</script>

<style lang="scss" scoped>
  .serviceContent{
    margin-bottom: 200px;
  }
  .link{
    cursor: pointer;
    color: black;
    &:hover{
      color:#5c87a6;
    }
  }
  @media(max-width: 640px){
    .desktop{
      display:none;
    }
    .mobile{
      display: initial;
    }
  }
  @media(min-width: 640px){
    .mobile{
      display: none;
    }
  }
  // 自幹下拉
  .dropDown{
    height: 0px;
    &.show{
      height: auto;
    }
  }
  //
  .card-header{
    background: white;
    border-color: black;
  }
  .card{
    border-color: black;
    border-radius: 0;
  }
  .card-body{
    border-color: black;
  }
  // 內容
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .col-3,.col-10{
    p{
      font-size: 14px;
    }
  }
  hr{
    border-color: black;
  }
  .btnInPage{
    border-radius: 5px;
    width: 203px;
    height: 39px;
    font-size: 21px;
    padding-left: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-chevron-right{
      margin-left: 37px;
    }
  }
  .captchaImg{
    margin-right: -14px;
  }
  // 每個下拉
  .destitle{
    line-height: 18px;
    display: block;
    cursor: pointer;
    // &:hover{
    //   border-bottom: 1px solid black;
    // }
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
    // margin-left: 1.6rem;
    // text-indent: -1.6rem;
    margin-top: 24px;
  }
  input[type="checkbox"]:checked ~ .indent{
    display: initial;
    margin-top: 24px;
  }
  input ~ .imgBox{
    display: none;
  }
  input:checked ~ .imgBox{
    max-width: 100%;
    display: initial;
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    max-width:100%;
  }
</style>

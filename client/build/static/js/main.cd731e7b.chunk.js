(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){},149:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(47),r=a.n(s),i=(a(149),a(67)),o=a(7),l=a(26),j=(a(110),a(74)),d=a(268),b=a(267),h=a(254),u=a(266),m=a(42),p=a(43),O=a.p+"static/media/logo_ma.8d552fb3.jpeg",f=a(1),g=function(){var e=new Date,t=Object(l.f)(),a=Object(c.useState)(e.toLocaleDateString()),n=Object(o.a)(a,2),s=n[0],r=n[1],g=Object(c.useState)(new Date),x=Object(o.a)(g,2),v=x[0],y=x[1],S=Object(c.useState)(0),N=Object(o.a)(S,2),w=N[0],k=N[1],C=Object(c.useState)(!1),I=Object(o.a)(C,2),P=I[0],D=I[1];return Object(f.jsxs)("div",{className:"d-flex flex-column align-items-center p-5",style:{backgroundColor:"#1a1b41"},children:[Object(f.jsx)("img",{className:"w-20 mb-4",src:O,alt:"Logo"}),Object(f.jsx)("h5",{className:"text-light font-weight-bolder f-36 mb-0 brand-logo",children:"HEY THERE!"}),Object(f.jsx)("h1",{className:"title_text font-weight-bolder f-44 brand-logo",children:"LET'S PARTY"}),Object(f.jsx)("p",{className:"text-light",children:"When are you coming to party?"}),Object(f.jsxs)("div",{className:"w-70 bg-white d-flex align-items-center",style:{height:"40px"},children:[Object(f.jsx)(j.DatePicker,{className:"ml-2",style:{border:"none",backgroundColor:"white",height:"0%"},selected:s,placeholder:"date of party",onChange:function(e){var t=new Date(e);r(new Date(t.setHours(0,0,0,0)).toDateString())},value:s}),Object(f.jsx)(m.a,{className:"mx-3",icon:p.b})]}),Object(f.jsx)("div",{className:"w-70 mt-3 bg-light",children:Object(f.jsx)(h.b,{style:{border:"none"},dateAdapter:b.a,children:Object(f.jsx)(u.a,{value:v,onChange:function(e){y(e)},renderInput:function(e){return Object(f.jsx)(d.a,Object(i.a)({},e))}})})}),Object(f.jsxs)("div",{className:"w-70 d-inline-flex mt-3",children:[Object(f.jsx)("p",{className:"p-0 mt-2 mb-0 text-light f-12 w-100",children:"Total Persons"}),Object(f.jsx)("input",{style:{border:"none",height:"15px",width:"60px"},className:"p-0 mt-2 f-12 text-center bg-light",type:"number",value:w,onChange:function(e){k(parseInt(e.target.value))},min:"0",max:"99"})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",onClick:function(e){D(!P),console.log(P)}}),Object(f.jsx)("span",{className:"mt-1 text-light",children:"Ladies Included?"})]})}),Object(f.jsx)("button",{className:"text-light w-70 mt-3",style:{backgroundColor:"#fe9124",height:"40px",borderRadius:"8px",border:"none"},onClick:function(){localStorage.setItem("totalPersons",w),localStorage.setItem("girls",P),localStorage.setItem("bookingDate",s),localStorage.setItem("time",v.toLocaleTimeString("en-US")),v.getHours()>=18||v.getHours()<8?localStorage.setItem("isNightParty",!0):localStorage.setItem("isNightParty",!1),t.push("/hotelList")},children:"GO!"})]})};var x=function(){return localStorage.getItem("businessLoggedIn"),Object(f.jsxs)("div",{className:"d-flex w-100 align-items-center",style:{position:"fixed",bottom:"0",backgroundColor:"white",height:"5%",fontSize:"18px"},children:[Object(f.jsx)(m.a,{className:"mx-auto",icon:p.e}),Object(f.jsx)(m.a,{className:"mx-auto",icon:p.d}),Object(f.jsx)(m.a,{className:"mx-auto",icon:p.a}),Object(f.jsx)(m.a,{className:"mx-auto",icon:p.f})]})},v=a(29),y=a(27),S=a.n(y);var N=function(){var e=Object(l.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(o.a)(b,2);return h[0],h[1],Object(c.useEffect)((function(){localStorage.clear()}),[]),Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"Business User Sign-in"}),Object(f.jsx)("input",{type:"text",placeholder:"email",value:n,onChange:function(e){s(e.target.value)}}),Object(f.jsx)("input",{type:"password",placeholder:"password",value:j,onChange:function(e){d(e.target.value)}}),Object(f.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 blue darken-1",onClick:function(t){!function(){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n))return S.a.toast({html:"Invalid Email",classes:"#d32f2f red darken-2"});localStorage.setItem("email",n),fetch("/bsignin",{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),"Content-Type":"application/json"},body:JSON.stringify({password:j,email:n})}).then((function(e){return e.json()})).then((function(t){t.error?S.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(localStorage.setItem("jwt",t.token),localStorage.setItem("user",JSON.stringify(t.user)),S.a.toast({html:"Signed In successfully",classes:"#43a047 green darken-1"}),localStorage.setItem("businessLoggedIn","true"),e.push("/hoteladmin"))})).catch((function(e){}))}()},children:"Submit"}),Object(f.jsx)("h6",{children:Object(f.jsx)(v.b,{to:"/bsignup",children:"Don't have an account? Create One"})})]})})};var w=function(){var e=Object(l.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),u=h[0],m=h[1],p=Object(c.useState)(""),O=Object(o.a)(p,2),g=O[0],x=O[1],y=Object(c.useState)(""),N=Object(o.a)(y,2),w=N[0],k=N[1],C=Object(c.useState)(""),I=Object(o.a)(C,2),P=I[0],D=I[1],T=Object(c.useState)(!1),B=Object(o.a)(T,2),A=B[0],L=B[1],E=Object(c.useState)(!1),R=Object(o.a)(E,2),U=R[0],z=R[1],H=Object(c.useState)(""),_=Object(o.a)(H,2),M=_[0],J=_[1],F=Object(c.useState)(""),Z=Object(o.a)(F,2),V=Z[0],Y=Z[1],W=Object(c.useState)(""),$=Object(o.a)(W,2),G=$[0],q=$[1],K=Object(c.useState)(""),Q=Object(o.a)(K,2),X=Q[0],ee=Q[1],te=Object(c.useState)(""),ae=Object(o.a)(te,2),ce=ae[0],ne=ae[1],se=Object(c.useState)(""),re=Object(o.a)(se,2),ie=re[0],oe=re[1],le=Object(c.useState)(""),je=Object(o.a)(le,2),de=je[0],be=je[1],he=Object(c.useState)(""),ue=Object(o.a)(he,2),me=ue[0],pe=ue[1],Oe=Object(c.useState)(""),fe=Object(o.a)(Oe,2),ge=fe[0],xe=fe[1],ve=Object(c.useState)(""),ye=Object(o.a)(ve,2),Se=ye[0],Ne=ye[1],we=Object(c.useState)(""),ke=Object(o.a)(we,2),Ce=ke[0],Ie=ke[1],Pe=Object(c.useState)(""),De=Object(o.a)(Pe,2),Te=De[0],Be=De[1],Ae={smallPrice:M,smallPic:V,smallCapacity:G,smallNightPrice:Se},Le={mediumPrice:X,mediumPic:ce,mediumCapacity:ie,mediumNightPrice:Ce},Ee={largePrice:de,largePic:me,largeCapacity:ge,largeNightPrice:Te},Re=Object(c.useState)(!1),Ue=Object(o.a)(Re,2),ze=Ue[0],He=Ue[1],_e=Object(c.useState)(!1),Me=Object(o.a)(_e,2),Je=Me[0],Fe=Me[1],Ze=Object(c.useState)(!1),Ve=Object(o.a)(Ze,2),Ye=Ve[0],We=Ve[1];return Object(c.useEffect)((function(){localStorage.clear()}),[]),Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"Business Sign-up"}),Object(f.jsx)("input",{type:"text",placeholder:"Hotel Name",value:n,onChange:function(e){s(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"email",value:j,onChange:function(e){d(e.target.value)}}),Object(f.jsx)("input",{type:"password",placeholder:"password",value:u,onChange:function(e){m(e.target.value)}}),Object(f.jsx)("input",{type:"password",placeholder:"confirm password",value:g,onChange:function(e){x(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"location",value:w,onChange:function(e){k(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"address",value:P,onChange:function(e){D(e.target.value)}}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",value:A,onClick:function(e){L(!A)}}),Object(f.jsx)("span",{children:"Are girls allowed with boys"})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",value:U,onClick:function(e){z(!U)}}),Object(f.jsx)("span",{children:"Is Night Party Allowed ?"})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",value:ze,onClick:function(e){He(!ze)}}),Object(f.jsx)("span",{children:"Small Room"}),ze?Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",placeholder:"price for small room",value:M,onChange:function(e){J(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"Night price for small room",value:Se,onChange:function(e){Ne(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"upload pictures for small room",value:V,onChange:function(e){Y(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"capacity of small room",value:G,onChange:function(e){q(e.target.value)}})]}):Object(f.jsx)("div",{})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",value:Je,onClick:function(e){Fe(!Je)}}),Object(f.jsx)("span",{children:"Medium Room"}),Je?Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",placeholder:"price for Medium Room",value:X,onChange:function(e){ee(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"Night price for Medium Room",value:Ce,onChange:function(e){Ie(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"upload pictures for Medium Room",value:ce,onChange:function(e){ne(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"capacity of Medium Room",value:ie,onChange:function(e){oe(e.target.value)}})]}):Object(f.jsx)("div",{})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",value:Ye,onClick:function(e){We(!Ye)}}),Object(f.jsx)("span",{children:"Large Room"}),Ye?Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",placeholder:"price for Large room",value:de,onChange:function(e){be(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"Night price for Large room",value:Te,onChange:function(e){Be(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"upload pictures for Large room",value:me,onChange:function(e){pe(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"capacity of Large room",value:ge,onChange:function(e){xe(e.target.value)}})]}):Object(f.jsx)("div",{})]})})]}),Object(f.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 blue darken-1",onClick:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(j)?u!=g?S.a.toast({html:"Passwords do not match",classes:"#d32f2f red darken-2"}):n&&j&&u&&g&&w&&P?void fetch("/bsignup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,password:u,hotelName:n,location:w,address:P,girlsWithBoys:A,isNightPartyAllowed:U,roomSmallData:Ae,roomMediumData:Le,roomLargeData:Ee})}).then((function(e){return e.json()})).then((function(t){t.error?S.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(S.a.toast({html:"Saved Successfuly",classes:"#43a047 green darken-1"}),e.push("/bsignin"))})):S.a.toast({html:"Please enter all fields",classes:"#d32f2f red darken-2"}):S.a.toast({html:"Invalid Email",classes:"#d32f2f red darken-2"})},children:"Sign Up"}),Object(f.jsx)("h6",{children:Object(f.jsx)(v.b,{to:"/bsignin",children:"Already have an account?"})})]})})},k=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(l.f)();Object(c.useEffect)((function(){var e=localStorage.getItem("email");fetch("/hotelBooking?hotelEmail=".concat(e),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){}))}),[]);return Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsxs)("div",{className:"left-sidebar",children:[Object(f.jsx)(v.b,{to:"/blocker",className:"waves-effect waves-light btn #e53935 red darken-1",children:"Block/Unblock"}),Object(f.jsx)(v.b,{to:"/BuploadPhoto",className:"waves-effect waves-light btn",children:"Upload Photos"}),Object(f.jsx)("button",{onClick:function(){s.push("/bsignin")},className:"waves-effect waves-light btn",children:"Sign out"})]}),Object(f.jsx)("div",{className:"center-bar",children:a.map((function(e){return Object(f.jsxs)("div",{className:"booking-box",children:[Object(f.jsxs)("p",{children:["id: ",e._id]}),Object(f.jsxs)("p",{children:["Name: ",e.name]}),Object(f.jsxs)("p",{children:["Persons: ",e.boys," boys, ",e.girls," girls"]}),Object(f.jsxs)("p",{children:["Date of check in: ",e.checkIn]}),Object(f.jsx)("p",{children:"Slot: Day"})]})}))})]})},C=a(105);a(201);C.a.initializeApp({apiKey:"AIzaSyC7MVeSHTj3JxCRJakOxQVsVZil-5VF4BA",authDomain:"otp-auth-228bf.firebaseapp.com",projectId:"otp-auth-228bf",storageBucket:"otp-auth-228bf.appspot.com",messagingSenderId:"457857315529",appId:"1:457857315529:web:af8bcaefb8b2d9aa69d318"});var I=C.a,P=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){if(!localStorage.getItem("phone"))return s.push("/uphone");S.a.toast({html:"OTP sent Successfuly",classes:"#43a047 green darken-1"}),i()}),[]);var s=Object(l.f)(),r=function(){window.recaptchaVerifier=new I.auth.RecaptchaVerifier("sign-in-button",{size:"invisible",callback:function(e){i()},defaultCountry:"IN"})},i=function(e){r();var t="+91"+localStorage.getItem("phone"),a=window.recaptchaVerifier;I.auth().signInWithPhoneNumber(t,a).then((function(e){window.confirmationResult=e})).catch((function(e){}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"User Sign-in"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=a;window.confirmationResult.confirm(t).then((function(e){e.user;S.a.toast({html:"User is verified",classes:"#d32f2f green darken-2"}),s.push("/"),localStorage.setItem("isAuthenticated","true")})).catch((function(e){}))},children:[Object(f.jsx)("input",{name:"otp",type:"text",placeholder:"Enter OTP",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]}),Object(f.jsx)("div",{id:"sign-in-button"})]})})})},D=function(){var e=Object(l.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){localStorage.clear()}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"User Sign-in"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{id:"sign-in-button"}),Object(f.jsx)("input",{name:"phoneNumber",type:"text",placeholder:"Enter your phone number",value:n,onChange:function(e){return s(e.target.value)}}),Object(f.jsx)("button",{onClick:function(){if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(n))return S.a.toast({html:"Please enter a valid phone number",classes:"#d32f2f red darken-2"});fetch("/checknum",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:n})}).then((function(e){return e.json()})).then((function(t){1==t.isUser?(e.push("/usignin"),localStorage.setItem("phone",t.phoneNumber)):e.push("/usignup")})).catch((function(e){}))},children:"Submit"})]})]})})})};var T=function(){var e=Object(l.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1],h=Object(c.useState)(new Date),u=Object(o.a)(h,2),m=u[0],p=u[1];return Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"User Sign-up"}),Object(f.jsx)("input",{type:"text",placeholder:"Name",value:n,onChange:function(e){s(e.target.value)}}),Object(f.jsx)("input",{type:"text",placeholder:"email",value:d,onChange:function(e){b(e.target.value)}}),Object(f.jsxs)(j.Container,{children:[Object(f.jsx)("p",{className:"mb-0 mt-2",children:"Enter Date of Birth"}),Object(f.jsx)(j.DatePicker,{className:"mt-0",selected:m,onChange:function(e){p(e)},placeholder:"Enter Date",value:m.toDateString()})]}),Object(f.jsx)("a",{className:"waves-effect btn #1976d2 blue darken-2",onClick:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(d)?n&&d&&m?void fetch("/usignup",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:d,dob:m,phoneNumber:localStorage.getItem("phone")})}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("name",t.name),t.error?S.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(S.a.toast({html:"Saved Successfuly",classes:"#43a047 green darken-1"}),e.push("/usignin"))})).catch((function(e){})):S.a.toast({html:"Please enter all fields",classes:"#d32f2f red darken-2"}):S.a.toast({html:"Invalid Email",classes:"#d32f2f red darken-2"})},children:"Submit"})]})})},B=a(122),A=a.n(B),L=function(){var e=Object(c.useState)(["December 09 2020"]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=localStorage.getItem("email");Object(c.useEffect)((function(){fetch("/getBlockedDates?email=".concat(s),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e[0].isBlockedOn)}))}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A.a,{multiple:!0,value:a,format:"ddd MMM DD YYYY",onChange:n}),Object(f.jsx)("botton",{className:"btn waves-effect waves-light #1e88e5 blue darken-1",onClick:function(){var e=a.map((function(e){var t=new Date(e);return new Date(t.setHours(0,0,0,0)).toDateString()}));fetch("/blockUnblock",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,isBlockedOn:e})}).then((function(e){return e.json()})).then((function(e){}))},children:"Submit"})]})},E=a(2),R=a.n(E),U=a(5),z=a(205),H=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(o.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)(),b=Object(o.a)(d,2),h=b[0],u=b[1],m=Object(c.useState)(),p=Object(o.a)(m,2),O=p[0],g=p[1],x=Object(c.useState)(),v=Object(o.a)(x,2),y=v[0],S=v[1],N=Object(l.g)(),w=Object(l.f)(),k=localStorage.getItem("isAuthenticated");function C(){return(C=Object(U.a)(R.a.mark((function e(){var t,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/razorpay",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({amount:100*h,currency:"INR",payment_capture:1,receipt:z.generate()})}).then((function(e){return e.json()}));case 2:t=e.sent,localStorage.setItem("Hotel",a),c={key:"rzp_test_ZwIQoXjws19gWq",amount:t.amount.toString(),currency:t.currency,name:"Acme Corp",description:"Test Transaction",image:"https://example.com/your_logo",order_id:t.id,created_at:t.created_at,handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature),w.push("/bill")},prefill:{name:"Gaurav Kumar",email:"gaurav.kumar@example.com",contact:"9999999999"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#3399cc"}},new window.Razorpay(c).open(),localStorage.setItem("razor",JSON.stringify(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){fetch(N.pathname,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=parseInt(e[0].roomSmallData.smallCapacity),a=parseInt(e[0].roomMediumData.mediumCapacity),c=parseInt(e[0].roomLargeData.largeCapacity),s=parseInt(localStorage.getItem("totalPersons"));n(e[0].hotelName),j(e[0].location),s<=t?(u(e[0].roomSmallData.smallPrice),g(e[0].roomSmallData.smallNightPrice)):s<=a?(u(e[0].roomMediumData.mediumPrice),g(e[0].roomMediumData.mediumNightPrice)):s<=c&&(u(e[0].roomLargeData.largePrice),g(e[0].roomLargeData.largeNightPrice)),S(e[0].mainPicUrl)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:y,alt:"hotel"}),Object(f.jsx)("h2",{children:a}),Object(f.jsx)("h6",{children:i}),Object(f.jsx)("h4",{children:"Discaimer"}),Object(f.jsx)("h5",{children:"Bookings for time after 1800 hrs will fall in Night Slot therefore Night Price will be charged"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Day Slot"}),Object(f.jsxs)("h5",{children:["Price - Rs ",h]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Night Slot"}),Object(f.jsxs)("h5",{children:["Price - Rs ",O]})]}),Object(f.jsxs)("button",{onClick:function(){k?function(){C.apply(this,arguments)}():w.push("/usignin")},className:"waves-effect waves-dark btn #64b5f6 blue lighten-2",children:["Pay Rs. ",h]})]})},_=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("date"),t=localStorage.getItem("totalPersons"),a=localStorage.getItem("girls"),c=localStorage.getItem("isNightParty");fetch("/hotelList?date=".concat(e,"&totalPersons=").concat(t,"&girls=").concat(a,"&isNightParty=").concat(c),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"brand-logo f-16",style:{margin:"20px",marginLeft:"20px"},children:"HOTEL LIST"}),a.map((function(e){var t,a=e.roomSmallData.smallPrice,c=e.roomMediumData.mediumPrice,n=e.roomLargeData.largePrice,s=parseInt(e.roomSmallData.smallCapacity),r=parseInt(e.roomMediumData.mediumCapacity),i=parseInt(e.roomLargeData.largeCapacity),o=parseInt(localStorage.getItem("totalPersons"));t=i||(r||s);return Object(f.jsx)(v.b,{to:"/userHotel/"+e._id,children:Object(f.jsxs)("div",{className:"hlist",children:[Object(f.jsx)("style",{children:"body { background-color: #1a1b41; }"}),Object(f.jsx)("img",{className:"",src:e.mainPicUrl,alt:"hotel"+e.hotelName,style:{width:"100%",height:150,borderStartEndRadius:"08px",borderStartStartRadius:"08px"}}),Object(f.jsxs)("div",{className:"half-card",children:[Object(f.jsx)("h5",{className:"f-16 font-weight-bolder ",children:e.hotelName}),Object(f.jsx)("h6",{className:"f-12 font-weight-light",children:e.address}),Object(f.jsxs)("div",{style:{display:"grid ",gridTemplateColumns:" 10fr 1fr 6fr"},children:[Object(f.jsxs)("h5",{className:"f-12",children:["Starting from Rs.",o<=s?a:o<=r?c:o<=i?n:void 0]}),Object(f.jsx)(m.a,{className:"mx-auto",icon:p.f}),Object(f.jsxs)("h5",{className:"f-12",style:{textAlign:"right"},children:["Upto ",t," people"]})]})]})]})})}))]})};var M=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(""),d=Object(o.a)(j,2),b=d[0],h=d[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"mycard card",children:Object(f.jsxs)("div",{className:"auth-card input-field",children:[Object(f.jsx)("h2",{children:"Upload Photo"}),Object(f.jsx)("input",{onChange:function(e){l(e.target.value)},type:"text",placeholder:"title"}),Object(f.jsxs)("div",{class:"file-field input-field",children:[Object(f.jsxs)("div",{class:"btn",children:[Object(f.jsx)("span",{children:"Browse"}),Object(f.jsx)("input",{type:"file",onChange:function(e){return n(e.target.files[0])}})]}),Object(f.jsx)("div",{class:"file-path-wrapper",children:Object(f.jsx)("input",{class:"file-path validate",type:"text"})})]}),Object(f.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 blue darken-1",onClick:function(e){return function(){var e=new FormData;e.append("file",a),e.append("upload_preset","meraadda-web"),e.append("cloud_name","mera-adda"),fetch("https://api.cloudinary.com/v1_1/mera-adda/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){h(e.url)})).then(fetch("/photoUpload",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,picUrl:b})}).then((function(e){return e.json()})).then((function(e){e.error?S.a.toast({html:e.error,classes:"#d32f2f red darken-2"}):(window.location.reload(),S.a.toast({html:"Saved Successfuly",classes:"#43a047 green darken-1"}))}))).catch((function(e){})).catch((function(e){}))}()},children:"Upload"})]})})})},J=function(){var e,t,a=JSON.parse(localStorage.getItem("razor")),n=localStorage.getItem("isNightParty"),s=localStorage.getItem("Hotel"),r=localStorage.getItem("bookingDate"),i=localStorage.getItem("time"),o=localStorage.getItem("totalPersons"),l=a.amount/100,j=a.id,d=new Date(1e3*a.created_at).toLocaleString();return 1==n?(e=6,t="Night party"):(e=12,t="Day Party"),Object(c.useEffect)((function(){fetch("/addConfirmBookingsUser",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({User:"abc@abc.com",Hotel:s,DateOfBooking:r,ArrivalTime:i,TotalPersons:o,BillingAmount:l,OrderId:j,PaymentTime:d,TimeSlot:e,Type:t})}).then((function(e){return e.json()})).then((function(e){e.error}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("style",{children:"body { background-color: #1a1b41; }"}),Object(f.jsx)("div",{className:"brand-logo text-center mt-4 ",children:"Payment Successful"}),Object(f.jsx)(m.a,{className:"title_text mx-auto d-flex my-3",icon:p.c}),Object(f.jsx)("p",{className:"text-center brand-logo",children:"Bill"}),Object(f.jsxs)("div",{className:"bill text-light f-12",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Hotel"}),Object(f.jsx)("p",{children:s})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Date of Booking"}),Object(f.jsx)("p",{children:r})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Time of Arrival"}),Object(f.jsx)("p",{children:i})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Total Persons"}),Object(f.jsx)("p",{children:o})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Billing Amount"}),Object(f.jsxs)("p",{children:["Rs. ",l]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Order ID"}),Object(f.jsx)("p",{children:j})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Date and time of payment"}),Object(f.jsx)("p",{children:d})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Time Slot"}),Object(f.jsxs)("p",{children:[e," Hrs"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Type"}),Object(f.jsx)("p",{children:t})]})]})]})},F=function(){var e=Object(l.f)(),t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){fetch("getConfirmBookingsUser?User=abc@abc.com",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.error||s(e)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"brand-logo f-18 text-center mt-4",children:"Booking History"}),n.map((function(t){var a=t.Hotel,c=t.DateOfBooking,n=t.BillingAmount,s=t.OrderId,r=t.PaymentTime,i=t.TimeSlot,o=t.TotalPersons,l=t.Type,j=t.ArrivalTime;return Object(f.jsxs)("div",{children:[Object(f.jsx)("style",{children:"body { background-color: #1a1b41; }"}),Object(f.jsxs)("div",{className:"hlist p-2 pt-4 ",style:{gridGap:"8px"},onClick:function(){var t=[a,c,n,s,r,i,o,l,j];localStorage.setItem("OldBill",t),e.push("/oldBill/"+s)},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder ",children:"Hotel"}),Object(f.jsx)("p",{className:"f-14",children:a})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Date Of Booking"}),Object(f.jsx)("p",{className:"f-12",children:c})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"f-10 font-weight-bolder",children:"Billing Amount"}),Object(f.jsxs)("p",{className:"f-12",children:["Rs. ",n]})]})]})]})}))]})},Z=function(){var e=localStorage.getItem("OldBill").split(",");return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["Hotel : ",e[0]]}),Object(f.jsxs)("p",{children:["Date of Booking : ",e[1]]}),Object(f.jsxs)("p",{children:["Time of Arrival : ",e[9]," "]}),Object(f.jsxs)("p",{children:["Billing Amount : Rs. ",e[2]]}),Object(f.jsxs)("p",{children:["Order Id : ",e[3]]}),Object(f.jsxs)("p",{children:["Date/Time of Payment : ",e[4],",",e[5]]}),Object(f.jsxs)("p",{children:["Time Slot :",e[6]," Hrs"]}),Object(f.jsxs)("p",{children:["Total Persons : ",e[7]," "]}),Object(f.jsxs)("p",{children:["Type : ",e[8]," "]})]})})},V=a(127),Y=["component"];var W=function(e){var t=e.component,a=Object(V.a)(e,Y),c=localStorage.getItem("isAuthenticated");return Object(f.jsx)(l.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return c?Object(f.jsx)(t,Object(i.a)({},e)):Object(f.jsx)(l.a,{to:"/usignin"})}}))};var $=function(){var e=document.createElement("script");return e.src="https://checkout.razorpay.com/v1/checkout.js",document.body.appendChild(e),Object(f.jsxs)(v.a,{children:[Object(f.jsx)(x,{}),Object(f.jsx)(l.b,{exact:!0,path:"/",children:Object(f.jsx)(g,{})}),Object(f.jsx)(l.b,{path:"/bsignin",children:Object(f.jsx)(N,{})}),Object(f.jsx)(l.b,{path:"/bsignup",children:Object(f.jsx)(w,{})}),Object(f.jsx)(l.b,{path:"/usignin",children:Object(f.jsx)(P,{})}),Object(f.jsx)(l.b,{path:"/uphone",children:Object(f.jsx)(D,{})}),Object(f.jsx)(l.b,{path:"/usignup",children:Object(f.jsx)(T,{})}),Object(f.jsx)(l.b,{path:"/hoteladmin",children:Object(f.jsx)(k,{})}),Object(f.jsx)(l.b,{path:"/blocker",children:Object(f.jsx)(L,{})}),Object(f.jsx)(l.b,{path:"/userHotel",children:Object(f.jsx)(H,{})}),Object(f.jsx)(l.b,{path:"/hotelList",children:Object(f.jsx)(_,{})}),Object(f.jsx)(l.b,{path:"/BuploadPhoto",children:Object(f.jsx)(M,{})}),Object(f.jsx)(W,{exact:!0,path:"/bill",component:J}),Object(f.jsx)(W,{exact:!0,path:"/allBookings",component:F}),Object(f.jsx)(W,{exact:!0,path:"/oldBill",component:Z})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,272)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(214);r.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root")),G()}},[[215,1,2]]]);
//# sourceMappingURL=main.cd731e7b.chunk.js.map
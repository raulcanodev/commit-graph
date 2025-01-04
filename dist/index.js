var D=Object.create;var f=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var N=(o,t)=>{for(var e in t)f(o,e,{get:t[e],enumerable:!0})},g=(o,t,e,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of E(t))!q.call(o,s)&&s!==e&&f(o,s,{get:()=>t[s],enumerable:!(u=S(t,s))||u.enumerable});return o};var T=(o,t,e)=>(e=o!=null?D($(o)):{},g(t||!o||!o.__esModule?f(e,"default",{value:o,enumerable:!0}):e,o)),j=o=>g(f({},"__esModule",{value:!0}),o);var F={};N(F,{ContributionGraph:()=>m});module.exports=j(F);var r=T(require("react")),y={light:{background:"#ffffff",text:"#24292f",loading:"#666666",error:"#ff0000",colorScheme:{0:"#ebedf0",1:"#9be9a8",2:"#40c463",3:"#30a14e",4:"#216e39"}},dark:{background:"#0d1117",text:"#c9d1d9",loading:"#8b949e",error:"#f85149",colorScheme:{0:"#161b22",1:"#0e4429",2:"#006d32",3:"#26a641",4:"#39d353"}}},A=({username:o,token:t,theme:e="light",customColorScheme:u,showLoadingState:s=!0})=>{let[C,w]=(0,r.useState)([]),[k,b]=(0,r.useState)(!0),[h,p]=(0,r.useState)(null),c=y[e]||y.light,d=u||c.colorScheme;(0,r.useEffect)(()=>{(async()=>{if(!o||!t){p("Please provide both username and token"),b(!1);return}try{let n=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:`bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({query:`
              query {
                user(login: "${o}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                          weekday
                        }
                      }
                    }
                  }
                }
              }
            `})});if(!n.ok)throw new Error("Network response was not ok");let i=await n.json();if(i.errors)throw new Error(i.errors[0].message);let l=i.data?.user?.contributionsCollection?.contributionCalendar;if(!l)throw new Error("No contribution data found");w(l),b(!1)}catch(n){p(n.message||"Failed to fetch contribution data"),b(!1),console.error("Error fetching contributions:",n)}})()},[o,t]);let x=a=>a===0?d[0]:a<=3?d[1]:a<=6?d[2]:a<=9?d[3]:d[4];if(k&&s)return r.default.createElement("div",{style:{color:c.loading}},"Loading contributions...");if(h)return r.default.createElement("div",{style:{color:c.error}},h);let v=Array(7).fill(null).map((a,n)=>C.weeks?.map(i=>i.contributionDays.find(l=>new Date(l.date).getDay()===n)||null).filter(Boolean));return r.default.createElement("div",{style:{maxWidth:"100%",overflowX:"auto",backgroundColor:c.background,padding:"8px",borderRadius:"6px"}},r.default.createElement("div",{style:{display:"inline-flex",flexDirection:"column",gap:"4px"}},v.map((a,n)=>r.default.createElement("div",{key:n,style:{display:"flex",gap:"4px"}},a.map((i,l)=>r.default.createElement("div",{key:`${n}-${l}`,style:{width:"12px",height:"12px",borderRadius:"2px",backgroundColor:x(i.contributionCount),transition:"background-color 0.2s ease"},title:`${i.date}: ${i.contributionCount} contributions`}))))))},m=A;

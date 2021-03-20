/*
城城领现金
更新：2021-03-21 03:01
活动时间：2021-03-20到2021-03-24
更新时间：2021-03-20 22:55
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#城城领现金
0 0-23/1 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_city.js, tag=城城领现金, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=================================Loon===================================
[Script]
cron "0 0-23/1 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_city.js,tag=城城领现金

===================================Surge================================
城城领现金 = type=cron,cronexp="0 0-23/1 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_city.js

====================================小火箭=============================
城城领现金 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_city.js, cronexpr="0 0-23/1 * * *", timeout=3600, enable=true
 */
const $ = new Env('群内——城城领现金');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '',
    message;
var abcde = 0,abc = [];
//自动抽奖 ，环境变量  JD_CITY_EXCHANGE ，建议活动快结束开启，默认关闭
let exchangeFlag = $.getdata('jdCityExchange') || !!0;
var _0xodz = 'jsjiami.com.v6',
    _0x5ec0 = [_0xodz, 'wqXDmcOAwo7DtcO+wqnDhMO7', 'w7vClMKKEmk=', 'w7pQwp7DjcKv', 'Q8O/w44xw5VkNA==', 'wq/DosKmO8Kd', 'wo3DjCrDpBg7w7U=', 'w5zClMKTEH0=', 'wrzDl8OE', 'R8O1w5U+w511', 'wozDgDLDtBw9', 'w6nDhgzDn8OW', 'eD9Rw7/Ct3sWfsOeNkgZTQ==', 'wrh4P8KD', 'wqPDhT/CjsOcNMOrcHLDs2xVOQ==', 'wp90K8O7', 'w77DizXDsQ==', 'wqnDrU3DoMKV', 'w7zCp0s2KA==', 'JnQyfMK0', 'Am3Dtj/DqA==', 'wotgLMOy', 'wpfCtB8zS8OX', 'wq1If8OeF8ObwpHDpXU2', 'w5VpKQBs', 'FMO8AsOgwoR0ejlMWMOlJALCjHfCjhU=', 'RsKBL0bDvQ==', 'BMKQwqYow7M=', 'woRjGMKOwpk=', 'B3bDvyzDiQ==', 'GsO8wq5ewq0=', 'wqHDp8KUDMKu', 'Fi7DgMKmw7E=', 'BQx5w7nCmw==', 'EmAaTcKa', 'DcOAIsOTwpU=', 'wpFQLkTDsw==', 'wrHDoVhdXw==', 'w6nCmFQDGA==', 'wqPDogbDmRw=', 'w47CtEsRDQ==', 'w6zDhTXDoA==', 'HQtNIjg=', 'LkwcQsKj', 'w6RpwpLDtMK1', 'wqXDlTRawpU=', 'woLDtWTDiMKp', 'w5Bvwps=', 'ejVB', 'w4QyEcKU6K2q5rOA5aa96LWz77+x6K+u5qO65p+N57+b6LSg6YWm6K2l', 'wpcFLMKLw54=', 'w67DpcO5VcOj', '5ouu5aSz57ub5p+f7721', 'w50DbMKJcQ==', 'aiJLCg==', 'HWITdcK6', 'FA7DmMKqw40=', 'woppPMOWNQ==', 'LsOiCABw', 'ZzBzBBvDlnQ=', 'wqRPb8OvGQ==', 'woTDgD3Dqzcuw7nCmA==', 'w43Cm8KuH30=', 'w7lqwo/DkcK5', 'wrDDsG7Dk8KdwozDrcKu', 'J8OpAwd5wo5+JA==', 'w7RvHRt2GRLDjA==', 'w5DCtMKo', 'wpXDpHXDuBE=', 'wr3CuAIFag==', 'wrbDgV/DgDM=', 'M8OzQMOuMg==', 'JnksQMKBw6Y=', 'wrfDmynCmsO4', 'J8OfwoFRwr4=', 'wpRBUcObKA==', 'woLDtW3DsA==', 'WTdnGzU=', 'wqVGf8OL', 'woXDoWvDowDDoAfDtcODHcOaw51Rag8=', 'aeWHg++9rOWEneiulsOP', 'OcOVSMOKJQ==', 'w6sFbsK5Vg==', 'fcKkE2/Dog==', 'w6gLbsK/YA==', 'SMKcD3vDjA==', 'wrTDpVrDmcKD', 'BcOAwoZywos=', 'EsOsSsOTKg==', 'w5sKbMKddw==', 'EmPDiSHDmA==', 'wrDDvmnDnhA=', 'w4jDjzXDu8OL', 'wprDizZpw7XCq8OFFsOzwpVFDXbCnnrCvsOKw6/DpMOpIcKpw5pnGcOSRsO2w41JKsKcw5UGIcOoPMOiIsOdw40twp10JcKGAGM=', 'w6vCrjJEfw==', 'egt3w5bCkw==', 'wpbDt3nDiMK9worDqcKtw4U=', 'w4rDqA7DieiujuawjeWmpei3mO++kuiuguahr+aduOe9kei3semHr+ivtw==', 'IGQ5w7fDtQ==', 'K1ETw43DqA==', 'w5/CtFoHBQ==', 'wq13EcOwJw==', 'McOyBsOawpk=', 'w63DpsOW', 'AcK2wrI0w6g0d2k0', 'woTDiDPDpQ==', 'K8O8wr5uwrE=', 'woDCvxo=', 'w5LCplMuKcKNw4zDtcOcw5wSGMODw57Crjk=', 'wpTDkDBcwq7Dp8KC', 'w73Cky1V', 'PcORKcOdwp5aQAo=', 'w5JGIA9s', 'w4PCiGcXIygbTA==', 'wq9qTcOdNQ==', 'w6p4wp7Do8Kb', 'ECLCmU3Clg==', 'wqd1O1HDicOA', 'KFEOw7jDiAI=', 'w57CicK/LV8=', 'X8OCwpZeTg==', 'wobDuTR4wqs=', 'wq/DtcK+Lg==', 'H8OdBsOBwrE=', 'ByTClk/CicOUw4Q6GsKWw4IgwpQ=', 'fzRCw4nCpw==', 'w5vCv8KpwpjCuwQra8OPw5DClMONNg==', 'OsOoAR5Swqx8JcOxwq/Dr8OWwok=', 'woPDhzrDpQE=', 'blbCmMK1NA==', '5LiA5Lm05LiG6LW55Y2x5py45o2f5L65X8KRwrTCshDCrXnCs8KNw4HlsIPph7/nu5Pmn5noh73mnozohY7lu6fnmbflip/lio7noJnCnA==', 'I3gvYMKL', 'LcOtwrpbwo4=', 'wqV/K0fDk8OTZMKAwp7DjcKQLjs=', 'wrDDrx5zwoo=', 'wq9CfMO5GsOIwprDjkM0wonDksKn', 'woHDon/DgA==', 'ZMOBwqRwWw==', '5LiO5Li25Lqm6LWz5Y2D5bCW6KeU5Ymg5YmX55uq5aW/5Y+O', 'dz8oaEnCq8OXwp7Ckw==', 'wrLDtmfDosK2', 'EMKXwoEYw6E=', 'LsOvCCBN', 'VMOQw4MZw7Y=', 'wojCogs=', 'LsOIwptS', 'JXc5d8K+', 'w4IAwpE=', '5b6N5aSt6I+p5Y+r', '6YaT57+I5pa75Lu4Dw==', 'ZMOcwo56Rx4=', 'EDzDnMKBw40=', 'w53CihlQZQ==', 'Ogdqw7XComZWwpsRJsO0RmHDghQx', 'wqRJfQ==', 'w6QrwqnDjHdad1nDpWTCpMKNwpgJw5hy', 'woEdNw==', 'M8Kbwrgpw7c=', 'eEjCgg==', 'NMOcIsOAwoRLXQxqeMOUEgfCvkU=', 'wrHDusKzP8K3awQ=', 'w7HCl8KxH1A=', 'w6/CoFU7FA==', 'wrTDmAdawr8=', 'BsOsUcORAQ==', 'FGnDrg==', 'OsOwDAVD', 'MDPDhMKrw4w=', 'wrwEF8KXw5E=', 'w6zDizTDp8OB', 'woLDtAQ=', 'wpvDncKDA8KQdypgF8O9wr1CBwQt', 'M8OdwoRewpF/E8OOHA==', 'YixY', 'w6bCkMKwHA==', 'wo4uwqbDhuivieaxjOWkn+i0o+++rOivi+agp+acoOe+iOi2qOmFkuivog==', 'w4hyHAxA', '5Lm15LiY5Li46Laf5Y635p6t5o6e5Ly1PzjDnMOdF3hHDBTCkOWzoumGiOe4huacneiFhOacqOiHh+W5oeeam+WImOWJm+ejuMK1', 'wozDhhjDkhg=', 'G8OwGMO+wq9w', 'w7nClGrDscKLw4M=', 'w6YBw5U0wqpWwrLDnzDDjMO/w7R+', 'ZSpKw4XCqw==', 'wp7DkCU=', '5Lik5Luv5Lij6LWN5Y6LwrU=', 'woHDlyNrwqrDh8KFGMOyw4hwCnY=', 'w5zCqcKQwqTCtwA=', 'w4p5ARo=', 'wrtvL3w=', '5oG55o2m5Lyv5Lmp', 'wpxpOcOhO8Ovw45LbQ/CgjsP', 'aio3ZA==', '5Ym35Yi956C9BA==', 'w4kMwrTDjlw=', 'w7QEwprDgHg=', 'IQB8IADCvCw=', 'BMKHwqkFw4A=', 'FsOlBsO1wrJ7dDlRUsO5cinCiHnCkl3CqSNIbcOcNMKpw5Nbw7PCgU9UOMKN', 'wojDl296wqE=', 'wqB/OWTClsOTesKMwqvDhw==', 'wrRtP8KSwp4Dw5jDucOvwqIKwrjCoRdzwpvCq8Oew47CjHHDs8OqwoHCrCMGRXVtw6gaw59tbyfDm8K7w6MYZ8K8McOAXMKnw6bDvsOj', 'wozDsHjDoRXCtRrDscOCH8ORw7sLIEkNKhzDo3dBw5DDhMOpw77CiMKWesOCwrcDO8ObwqF7w4NcOVEPwrPDmMO0w7tTw5N4wrxgwprDlsKcdsOawo9bMkHDvgXDgsKRwppLwrQww6E0fUBGZsOxLMKjcCE=', 'wpTDiU7DqMKY', 'w4vCgsKNFlE=', 'w47Crgh3aw==', 'woYSMsK4', 'NMOmJsO2wrY=', 'L30pY8KF', 'w7zCrBt0Yw==', 'wqvDiCpIwq0=', 'w6DChcKpCU9xwpZqw7YCwq17dsOpFksTw5gfDw53GmsYSTh4wqRcB8O+JmbDocOLwr1oMMOOwqLDgg4zJgbCr8OjH8KdbsKSw7AB', 'wrQaKMKqw4w=', 'wrvDkTHDtC0=', 'w7vDkC/DpMKIE8KxIGtDwrDDv8KgWMOFw5Q7', 'w6bDvhDDpMOW', 'wpTDomNbVi/CuMKdwrkdB8KNbQ==', 'w6DCicKbwpnCjCQeS8OCw6s=', 'w7/Ch3gJAcKtw7Q=', 'wrLChiYJQQ==', 'wp7DsMOYwqjDrg==', 'fcOAwrNh', 'wpXDoGvDuAvDqRrDh8OT', 'Pwpv', 'H2bDtSg=', 'ecK2CH7Dvw==', 'DMOAZcOtOQ==', 'wrVqNMOcGA==', 'BS7ChlnCk8OH', 'wpXCsB41Qg==', 'HXMRa8KG', 'TcOpw7Y6w5N5Ow==', 'E0jDugrDnw==', 'BABSLRo=', 'VwZ3Ow0=', 'E1MDVcKC', 'w7LDgyXDv8OKUsK4IA==', 'w7Rywp7Dn8Kc', 'SMO1w50=', '6Iyi5b2mJA==', 'JMOIwoJW', 'wq58OMKXwoFN', 'w44XbMKIccKuQH3ChSA4aMKWM8KQ', 'w6jDhTLDtcOIcMK0NmU=', 'w6HCiTk=', '5LmG5Lq15p2T5Yih5ZiR6L6b5ZmK56qH5peu5oyb', 'wpJ+XcO/Kg==', 'woXDn8OHwrjDoA==', 'w5jCsMKsLko=', 'wqNIXcOyGw==', 'w6cGw4gCwqFD', 'wrMcEMKnw6w=', 'w48AwrHDrVQ=', 'M3sAw7DDkA==', 'B8Ogwr19wrc=', 'EcOedsOfGQ==', 'wphxN3XDrA==', 'wrt7LmfDng==', 'woVLMsOABw==', 'w6TCnsK6', 'RsK3fQ==', 'wqTCvxoVaA==', 'w7HDqMODaMOX', 'w5rCuMK0wq7CsBE=', 'wrTDu8Kw', 'HsKtwqc=', '5Lum5LiK5p2G5Yqk5Zqb6Kyr6ZSb5pSH5o+i5Lua56iG77yV6K+N5qOy5p2t6Iab6Lqp6K+U5aaY572557mj5oCd5YW7', 'bzNWRRHCkXB5Z2jDtHg=', 'ccKbccOqBcOVEcOvCxXDs8O7IQ==', 'wqLDvMO6OcKh', 'fTdNAhLDmA==', 'wrpJJ8K0wqg=', '6K2C5Yil6ZmR5oeE5Z+7JzZ2w4bDjOi9o+WHjeagg+S8n+aXpOWEkuWvoDbluZnorZPpg7jovIHohZPmnq3ljKvojpflj5zDn8OmN8OOATk=', 'RMOVwpDDo8Kk', 'wqfDkArDqC8=', 'wq/Djhlgwqc=', 'aB4zdWg=', 'b8OiDwhOw5I=', 'ZR4vdHA=', 'w7bDjjLClcOcGcOwKWDDqBgBKMKrXmZjwoXDhsKEb8OMXMK1w450YhDDmsK0w7Q=', 'by4/cQrCrcOSwpHCnCQ=', 'OhZGLAvCvQ==', 'LMOuFg==', 'w6tYJzxrPS3DtsO1wp/DocKUw4g=', 'wq5NCVzDtw==', 'wqDDvcKcOcKL', 'ecK1JXzDtnPCjwPDvsKA', 'wqzDkEzDkA==', 'w7vDjzLDsMOFR8K0', 'HcOxF8OpwqsjfB1QUsO5OHjDgjjDjl/Dr30BLcOddsO+wpd3wqnCiC0/MsOmIwvDojQZTWnDr8KIWV8Zwp5HVXfDocKvWMO2w6YUOnrDr8O7wrE6wpDChMK7w7xwwoDCjsODTcOdQUwmUcKCYA4=', 'LsO6CRwbw493JMOywrDDj8OQwp5Cwp13w6U=', 'WsK5aCzDow==', 'w7jCgmM=', 'NMORXcOK', 'woluKsOWP8OPw4k=', 'w4RyDg==', 'w4LCtcKCPXkJw6wC', 'w4sBwoA=', 'wotjVMOuN8Orwr3DrA==', 'FiJZw4XCjg==', 'wonCvgs=', 'woDDvwZUwo46w7A=', 'PybDoMKlw4x5wrlOw44=', 'H8OhAsOpwqgiOmJZTcO+cy7DlXzCmF/CvildNsKQKMKsw5dcw6nCgw4dY8OOD0A=', 'w7ZMZT1kw7pzwrXDt8OTF8Obw6QtHi7CmcOww4bCr8OKQ8OJw55WbgtQw4LCm3bDplEwwooKw7LDvsOww4fCpyPDtcOCw7wlw5UPdcOew5R8HB8lA3VResOzeMO1w7DCmcKiHBDDocOmw53DhE1BOcKuw70AVkUtTCjDlMKvWTLCvMKbw6BgwrgDwrUKRMOcwq4pIwEVdsOWGX5OXmrDn8ODHBNCwrZof8KsQD/Ci2HDp8OoDnjCthhuFmDDkkRKwqsNQSLCkzHDjVBLwqNZwozCsj7DoTs=', 'FWbDrCw=', 'w55pwobDtMKXw7ZO', 'wpTDsWrDpAnDug==', 'w4hXVgJ7w4dZwojDkMO/', '44Gi5oyS56e644GM6K2x5YSb6I6p5Y+Z5Luh5Lmz6La45Y+T5LqjHMKXw4lPc8KHw7DnmYjmj4TkvK/nl49NwpVEwpXCucOG55is5Lur5LuQ56y75YiO6I+y5Y26', 'w4UWasKKZ8O6GwbCjig8RcOZLcOWWWfDlMOgHnAuworCkGbDviXDksKLwoPCnsKawrrDoBHDuU9MKSBLI8Ok', 'aXzCpMKOIQ==', 'eylB', 'wod1LMOjLcKWwo4AahnCoidTEMOLYTzDssO9wpbChTM8bQESw4jCicOHRQDCpsO0REfDohs/UEzCl3Yw', 'w78Gw6smwrQ=', 'w41zHw==', 'I3ABw67Dtg==', 'wolqLsKQwqNYwprCsw==', 'S17CrMK0Lw==', 'R8K5bjzDrg==', 'wqZ7KHfDkw==', 'OgtsJhc=', 'wo/Dp1XDvgLDpx0=', 'w6LCk03Dl8KJ', 'w7nCnmM=', 'eMOow6p3wqx5NOW8j+WmhuOBv+S4suS4uOi2heWOiA==', 'w4MLfcKRWsKhWUw=', 'QylDw57CkXsJfg==', 'wqPDlnrDpBI=', 'w5DCh3HDrMKx', 'w4dydRpN', 'wotuNsO2', 'w7vCkGnDsw==', '44GQ5o2556eM44Cmwpx3FcODDC7ltJflppLmlYw=', 'c0/Cl8K3DsOFw6nDhA==', 'wqfDjCdrwoHDpcKHGQ==', 'wovorb7phbzmlqvnm4nlvqLojpfljZjChcKEwqpmVEkAw5skfcKTwrpcw5YkdGEiK8O7NG3DjUMKHcKawq7DplFdwrJwamjCvcO0KER+YcKmw4LCpQ==', 'wq/CqwUcaA==', 'w6DCv3Y8Ag8=', 'AyZbw5LCpV17wq0yBw==', 'YCJSDg==', 'woTDhcORwp3Dl8OcwqXDkg==', 'wrjDmMOQworDoQ==', 'J8KxwqUvw4gyc2o=', 'wpMRCMKcw6s=', 'ai4tUk/CrcOMwp3CqS7DgMK0w7Y=', 'b8OkwqTDjMKGZA==', 'EsOuZsOUGA==', 'wooWNsKOw7XDo8O+M8K+dl5Nw7k=', 'NEXDuzjDnA==', 'wpx1OcOnK8Of', 'w4BZVhc=', 'KH8xRsKcw7DCkA==', 'wpvDiSTCr8Oj', 'XSNWw4jCrg==', 'wrtoTMO+Cg==', 'w7bDq8O4WsOE', 'w6cJwpzDjms=', 'woloNMO/', 'JnMlYsKHw7w=', 'b8Ouwq0=', 'w4hXRQ==', '5Li55Lut5pyJ5Yi35ZqX6KyU6Ze05pa45o2v5LuU56iO77+l6K+b5qOz5p+n6Ieo6Lqh6K2y5aWg576m57q25oGm5YeG', 'W8KHCVo=', 'woLDhi7DsDc=', 'wpXDmk7DqzE=', 'worDjkDDq8KD', 'wrzDtcKjOw==', 'wqrDg3PDhiA=', 'EcOgNMO9wqg=', 'wqJGf8OJGg==', 'woFgNcO2', 'wrTDguWkvei1iEHDueWMiuWZisKjwqQ=', 'wr7DvcK5O8KjSBs=', 'w4kNcMKf', 'Ng3DmsKP', 'PlZEw57DlA==', 'w6QOw6UNwrE=', 'w6bChXbDv8KRw4xzwq54', 'f8K8AXzDuA==', 'GyZQw4bDhlNjwq0iGw==', 'wqMACcKrw60=', 'L3g9', 'wrTDmMOC', 'XB55w7nCjF82RMOcHmkyag==', 'KFQuw5fDiQ==', 'wqZCf8OOE8Odwok=', 'wprDqQvCvQ==', 'dgcyS3I=', 'w6LClcK8CUxww5AVw6kcw610KcO+WxZQw4VRTV8rBzlTamNywrdoR8ONHAnDoMKqw6tPesKiw7XDp041e1fDpMK/WsKoScKwwqhHwqbCq8K2w7rDhX8DEMOEw4EDMsOZwoV9CMKpw4B5RMKew7pH', 'wrXDhytSwqU=', 'wqDDhCvDijA=', 'N8OGXMOJNA==', 'wqXDhxnDjxw=', 'w4PCn8KNwrjCvQ==', 'wpHDkk/DqMKA', 'cyZ/', 'woXDv8OVwoDDkA==', 'SMOPwqDDscKo', 'wq/DrcKYPcKo', 'wrHCoAgHdA==', 'KsOxCzxd', 'VsKVEUnDpg==', 'wq/CgSgVcw==', 'w6cqUMKqTg==', 'wonCmxYHUA==', 'WSByOT8=', 'wobDqn/DmMKMworDpcK/w7RNw6zCtH3DjTLCvQ==', 'wrcwCcK+w48=', 'wrPDn8OOwqzDtsOZwq0=', 'w5ZdUQNyw4E=', 'wqLDgz1+wog=', 'w5zCrsKqwqbCtw==', 'ccOGwq/DkcK8', 'wqnDkybDmBg=', 'wrLDiVs=', '5oqX5aaO57uJ5p+D776c', 'bUfChsKvJQ==', 'wq5LJFjDsQ==', 'cMOyw40+w5Y=', 'eUfCgMK9', 'woHDunLDuMKX', 'wr7DjDPCmQ==', 'w4XCkDwP6K+Q5rOh5ae96LaR77+86K+D5qO/5py8576f6LSg6YeR6K6T', 'Onc5dsKW', 'woPDuwZR', 'w6wFw5YG', 'w45lwo/DgsKUw6Y=', 'w5gRe8KIVcKjQGvCjT44YsKZJsKX', 'wo0dN8K0w6nDp8OFMg==', 'wobDhjk=', 'w7TCjWs=', 'wqRlw7zlp7Llj7XliqflirXnoIfvvro=', 'w5RvHRt5GwvDq8OVwqvDgcKTw7LDuDA=', 'w5VuworDnsKMw7diCQ==', 'Y0vDqw==', 'TmXCvMK/Eg==', 'w7PDjSjDgcOQ', 'EDRLED0=', 'DSDClX0=', 'wqPDk8OHwprDtcOJ', 'wpbDnjZ4', 'LcOIwp9ZwrZ2HMOHFg==', 'woRdCsK2woo=', 'wrvDmw5LwoE=', 'wovDtRU=', 'f8OAwrV7RzVhw48=', 'wp0pOMKEw6k=', 'w4ccwrrDoFlnQA==', 'c1XCmcKKMQ==', 'woBjMsO2PcOY', 'wrzDgjnCucOLBQ==', 'w4xoUhpy', 'w7DCsnwBDA==', 'w7TCvCdkXA==', 'wqd1Ow==', '5LmK5LqI5pyU5Yiw5ZiN6L2a5Zqt56ub5pea5oye', 'w73Cmn0dBA==', 'wrDDmidQwoQ=', 'OcKgwrYUw60=', 'wobDqn/DmMKMwp/DpcKow5lLw7fCtHrDjTXCtA==', 'Onk4cQ==', 'wqnDgHRbcQ==', 'wotPasOsHA==', 'OSh6w5zCvg==', 'wo9XIsKTwrU=', 'w6jCg34eBQ==', 'wpbCpR4vScOEwqXDksKJ', 'BMObw6oc6K2D5rGS5aWk6Les77+A6K6Z5qOC5p+g57656LWW6YWK6K2y', 'w4XCpkzDu8Kx', 'wqUbIsKpw6w=', 'wp7DkCVcwr3Dtg==', '6aCa57iI5Y2D57mH5py4', 'QMO7w440', 'wo1oIsOQMcOIw4Q=', 'cUnCkw==', 'w63CrUwy', 'GyTCkmnCjcOB', 'R8Ovw4gnw5F+IcKdwqUDZ0bCicOKw68=', 'auWFle+9h+WFtOitksK0', 'w4V9DAg=', 'w58HbcKPeMK0', 'CCbDu8Kvw4lfwqt3w6I=', 'w6QLw4U=', '6LaT5Yyt5bSs6bia77+f552u5LmU5Yi+6YCM6K2I56Ox', 'w4hXRTNsw4c=', 'wrJOCXrDiw==', 'w6xXwrTDmsK2', 'w54WbMKTesKnXU/ClQ==', 'YcOAwqc=', 'w499FQw=', 'LcOuwpBc6K+U5rC55aSl6LaH77256KyR5qC75p6X576O6LaC6Yah6K6/', 'wqnDhjHDqxAqw57CucKs', 'w6JzFwJRHQzDo8Ow', 'CgZHw7PCrg==', 'bMOpwo9ieQ==', 'wqjDi03DosKY', 'w7fCmH7DlcKQw49/', 'w5RXNCts', 'wobDqn/DmMKMwoDDocK4w4hHw7PCnFjDhSjCmMKkFDk=', 'XQQNW2A=', 'wp3DmD5+woI=', 'wpE4DcKfw4k=', 'dCQpdQ==', 'wp3DksOcwrjDsA==', 'w7vCmsKZI1M=', 'w7BmwpXDgMK+', 'T8OnwqPDnMK0', 'wonDrGw=', 'ZH85w7TorY3msLLlprTot5fvvrDor7/moajmnYLnvLDot4XphqzorI4=', 'ZjtUw5/Cug==', 'fMKiJHnDuQ==', 'OsOiLzRU', '6I2Q5byNUg==', 'wr9sOcKQwohXwoPCgsOxwr4cw5XCqgA1', 'jJsjiZIaxWmi.QZgcomZ.Wvtt6VQxD=='];
(function(_0x4f04c5, _0x411784, _0x2ad46c) {
    var _0x45ce6c = function(_0x3d0126, _0x4fc5b9, _0x79e153, _0x4841b5, _0x2ca5d4) {
        _0x4fc5b9 = _0x4fc5b9 >> 0x8, _0x2ca5d4 = 'po';
        var _0x474e80 = 'shift',
            _0x133bb4 = 'push';
        if (_0x4fc5b9 < _0x3d0126) {
            while (--_0x3d0126) {
                _0x4841b5 = _0x4f04c5[_0x474e80]();
                if (_0x4fc5b9 === _0x3d0126) {
                    _0x4fc5b9 = _0x4841b5;
                    _0x79e153 = _0x4f04c5[_0x2ca5d4 + 'p']();
                } else if (_0x4fc5b9 && _0x79e153['replace'](/[JZIxWQZgZWttVQxD=]/g, '') === _0x4fc5b9) {
                    _0x4f04c5[_0x133bb4](_0x4841b5);
                }
            }
            _0x4f04c5[_0x133bb4](_0x4f04c5[_0x474e80]());
        }
        return 0x79e77;
    };
    return _0x45ce6c(++_0x411784, _0x2ad46c) >> _0x411784 ^ _0x2ad46c;
}(_0x5ec0, 0x123, 0x12300));
var _0x551f = function(_0x3e514e, _0x119ed9) {
    _0x3e514e = ~~'0x' ['concat'](_0x3e514e);
    var _0x54d79a = _0x5ec0[_0x3e514e];
    if (_0x551f['DSQsqd'] === undefined) {
        (function() {
            var _0x11dd6a = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0xb4129a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x11dd6a['atob'] || (_0x11dd6a['atob'] = function(_0x2eb1aa) {
                var _0x53c790 = String(_0x2eb1aa)['replace'](/=+$/, '');
                for (var _0x3346f9 = 0x0, _0x3c1a22, _0x45078c, _0x50c2ca = 0x0, _0x55e7f6 = ''; _0x45078c = _0x53c790['charAt'](_0x50c2ca++); ~_0x45078c && (_0x3c1a22 = _0x3346f9 % 0x4 ? _0x3c1a22 * 0x40 + _0x45078c : _0x45078c, _0x3346f9++ % 0x4) ? _0x55e7f6 += String['fromCharCode'](0xff & _0x3c1a22 >> (-0x2 * _0x3346f9 & 0x6)) : 0x0) {
                    _0x45078c = _0xb4129a['indexOf'](_0x45078c);
                }
                return _0x55e7f6;
            });
        }());
        var _0x21f908 = function(_0x1c4da8, _0x119ed9) {
            var _0x561bed = [],
                _0x18e77b = 0x0,
                _0x56d808, _0x327b25 = '',
                _0x458343 = '';
            _0x1c4da8 = atob(_0x1c4da8);
            for (var _0x3b9f7d = 0x0, _0x5866b3 = _0x1c4da8['length']; _0x3b9f7d < _0x5866b3; _0x3b9f7d++) {
                _0x458343 += '%' + ('00' + _0x1c4da8['charCodeAt'](_0x3b9f7d)['toString'](0x10))['slice'](-0x2);
            }
            _0x1c4da8 = decodeURIComponent(_0x458343);
            for (var _0x294a49 = 0x0; _0x294a49 < 0x100; _0x294a49++) {
                _0x561bed[_0x294a49] = _0x294a49;
            }
            for (_0x294a49 = 0x0; _0x294a49 < 0x100; _0x294a49++) {
                _0x18e77b = (_0x18e77b + _0x561bed[_0x294a49] + _0x119ed9['charCodeAt'](_0x294a49 % _0x119ed9['length'])) % 0x100;
                _0x56d808 = _0x561bed[_0x294a49];
                _0x561bed[_0x294a49] = _0x561bed[_0x18e77b];
                _0x561bed[_0x18e77b] = _0x56d808;
            }
            _0x294a49 = 0x0;
            _0x18e77b = 0x0;
            for (var _0x28d132 = 0x0; _0x28d132 < _0x1c4da8['length']; _0x28d132++) {
                _0x294a49 = (_0x294a49 + 0x1) % 0x100;
                _0x18e77b = (_0x18e77b + _0x561bed[_0x294a49]) % 0x100;
                _0x56d808 = _0x561bed[_0x294a49];
                _0x561bed[_0x294a49] = _0x561bed[_0x18e77b];
                _0x561bed[_0x18e77b] = _0x56d808;
                _0x327b25 += String['fromCharCode'](_0x1c4da8['charCodeAt'](_0x28d132) ^ _0x561bed[(_0x561bed[_0x294a49] + _0x561bed[_0x18e77b]) % 0x100]);
            }
            return _0x327b25;
        };
        _0x551f['sMDFlw'] = _0x21f908;
        _0x551f['MKyJzr'] = {};
        _0x551f['DSQsqd'] = !![];
    }
    var _0x54e31e = _0x551f['MKyJzr'][_0x3e514e];
    if (_0x54e31e === undefined) {
        if (_0x551f['qArXaA'] === undefined) {
            _0x551f['qArXaA'] = !![];
        }
        _0x54d79a = _0x551f['sMDFlw'](_0x54d79a, _0x119ed9);
        _0x551f['MKyJzr'][_0x3e514e] = _0x54d79a;
    } else {
        _0x54d79a = _0x54e31e;
    }
    return _0x54d79a;
};
if ($['isNode']()) {
    Object[_0x551f('0', 'bs0$')](jdCookieNode)[_0x551f('1', 'un%E')](_0x2eb896 => {
        cookiesArr['push'](jdCookieNode[_0x2eb896]);
    });
    if (process[_0x551f('2', 'wbkX')][_0x551f('3', ')wyW')] && process[_0x551f('4', 'tisG')][_0x551f('5', 'EKqs')] === _0x551f('6', 'oCCQ')) console[_0x551f('7', 'nf1g')] = () => {};
} else {
    cookiesArr = [$[_0x551f('8', 'm2qs')]('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata'](_0x551f('9', ')QSH')) || '[]')['map'](_0x50d60a => _0x50d60a['cookie'])]['filter'](_0x5ac339 => !!_0x5ac339);
}
const JD_API_HOST = _0x551f('a', 'OsHR');
let inviteCodes = [_0x551f('b', 'HlON')];//!!!!
!(async() => {
    var _0x1b648d = {
        'hoppN': function(_0x32778a, _0x3a745f) {
            return _0x32778a === _0x3a745f;
        },
        'sNWzT': _0x551f('c', 'Wkb0'),
        'oMKJP': _0x551f('d', '2#[v'),
        'LWjWE': _0x551f('e', 'kn5&'),
        'fuBds': _0x551f('f', 'HlON'),
        'vmDCq': _0x551f('10', '6)c1'),
        'wbIAv': function(_0x49d262) {
            return _0x49d262();
        },
        'gNhSL': function(_0xc35b5f, _0x37a3f9) {
            return _0xc35b5f === _0x37a3f9;
        },
        'yoLQX': 'PzgvK',
        'VxXho': function(_0x43970f, _0x36aee1) {
            return _0x43970f(_0x36aee1);
        },
        'EBcuw': function(_0xce9846, _0x5b156b) {
            return _0xce9846 === _0x5b156b;
        },
        'JziZO': _0x551f('11', 'Y*HT'),
        'dcOLb': function(_0x167e80, _0x2c556b) {
            return _0x167e80 < _0x2c556b;
        },
        'MZBmX': function(_0xf76181, _0x250f05) {
            return _0xf76181(_0x250f05);
        },
        'zJCgr': 'status',
        'zOGTx': _0x551f('12', '[G7V'),
        'IfjAU': function(_0x1e39d2, _0x1823cf) {
            return _0x1e39d2 > _0x1823cf;
        }
    };
    if (!cookiesArr[0x0]) {
        $[_0x551f('13', 'hHKL')]($['name'], _0x1b648d['vmDCq'], 'https://bean.m.jd.com/bean/signIndex.action', {
            'open-url': _0x551f('14', 'un%E')
        });
        return;
    }
    await _0x1b648d[_0x551f('15', 'uHno')](requireConfig);
    if (exchangeFlag) {
        console[_0x551f('16', 'wbkX')]('脚本自动抽奖');
    } else {
        console['log']('脚本不会自动抽奖，建议活动快结束开启，默认关闭');
    }
    for (let _0x4d7d87 = 0x0; _0x4d7d87 < cookiesArr['length']; _0x4d7d87++) {
        if (cookiesArr[_0x4d7d87]) {
            if (_0x1b648d[_0x551f('17', 'Lsem')](_0x1b648d['yoLQX'], _0x1b648d['yoLQX'])) {
                cookie = cookiesArr[_0x4d7d87];
                $[_0x551f('18', 'h5PE')] = _0x1b648d[_0x551f('19', '[G7V')](decodeURIComponent, cookie[_0x551f('1a', 'uJy8')](/pt_pin=(.+?);/) && cookie[_0x551f('1b', 'uTl]')](/pt_pin=(.+?);/)[0x1]);
                $[_0x551f('1c', 'Xe(l')] = _0x4d7d87 + 0x1;
                $[_0x551f('1d', 'kn5&')] = !![];
                $['nickName'] = '';
                message = '';
                await _0x1b648d[_0x551f('1e', '4yT0')](TotalBean);
                console[_0x551f('1f', '4yT0')](_0x551f('20', '6)c1') + $['index'] + '】' + ($[_0x551f('21', 'Y*HT')] || $[_0x551f('22', 'hHKL')]) + '*********');
                if (!$['isLogin']) {
                    if (_0x1b648d[_0x551f('23', 'kn5&')](_0x551f('24', '4yT0'), _0x551f('25', 'HlON'))) {
                        $[_0x551f('26', 'un%E')]();
                    } else {
                        $['msg']($[_0x551f('27', '4yT0')], _0x551f('28', '(W!2'), '京东账号' + $['index'] + ' ' + ($[_0x551f('29', '[G7V')] || $[_0x551f('2a', ']Wk5')]) + _0x551f('2b', 'hT6j'), {
                            'open-url': _0x1b648d[_0x551f('2c', 'nf1g')]
                        });
                        if ($[_0x551f('2d', 'GQ6r')]()) {
                            await notify[_0x551f('2e', 'oCCQ')]($[_0x551f('2f', 'E!gK')] + 'cookie已失效 - ' + $[_0x551f('30', 'zHZS')], '京东账号' + $[_0x551f('31', 'zHZS')] + ' ' + $[_0x551f('32', '6)c1')] + '请重新登录获取cookie');
                        }
                        continue;
                    }
                }
                await _0x1b648d[_0x551f('33', 'Z!Tr')](shareCodesFormat);
                await getInfo('', !![]);
                for (let _0x4d7d87 = 0x0; _0x1b648d['dcOLb'](_0x4d7d87, $[_0x551f('34', 'aG7W')][_0x551f('35', 'gpH3')]); ++_0x4d7d87) {
                    let _0x544d25 = await _0x1b648d[_0x551f('36', 'bs0$')](getInfo, $[_0x551f('37', 'Z!Tr')][_0x4d7d87]);
                    if (_0x544d25[_0x1b648d['zJCgr']] && _0x1b648d[_0x551f('38', 'Wkb0')](_0x544d25[_0x551f('39', 'un%E')], '3') || _0x544d25[_0x551f('3a', 'HlON')] && _0x544d25['data'][_0x551f('3b', 'R*Ma')] === -0xb) {
                        if (_0x551f('3c', '&Ao^') !== _0x551f('3d', 'hHKL')) {
                            break;
                        } else {
                            $['logErr'](e, resp);
                        }
                    }
                }
                await _0x1b648d['wbIAv'](getInviteInfo);
                if (exchangeFlag) {
                    if (_0x1b648d[_0x551f('3e', 'EKqs')] === _0x1b648d['zOGTx']) {
                        const _0x1ca135 = await _0x1b648d[_0x551f('3f', 'hT6j')](city_lotteryAward);
                        if (_0x1ca135 && _0x1b648d[_0x551f('40', 'tisG')](_0x1ca135, 0x0)) {
                            for (let _0x4d7d87 = 0x0; _0x4d7d87 < new Array(_0x1ca135)[_0x551f('41', 'un%E')]('')[_0x551f('42', 'R*Ma')]; _0x4d7d87++) {
                                await $['wait'](0x3e8);
                                await city_lotteryAward();
                            }
                        }
                    } else {
                        console[_0x551f('43', 'gpH3')](e);
                        console[_0x551f('44', 'HlON')](_0x551f('45', '4yT0'));
                        return ![];
                    }
                }
                await $[_0x551f('46', 'F2n#')](0x3e8);
            } else {
                console['log']('抽奖结果：' + data);
                data = JSON['parse'](data);
                if (_0x1b648d[_0x551f('47', 'wGg0')](data[_0x1b648d[_0x551f('48', 'kn5&')]][_0x1b648d[_0x551f('49', 'qXlN')]], 0x0)) {
                    const _0xc95be1 = data[_0x551f('4a', 'NUSN')][_0x1b648d[_0x551f('4b', 'kn5&')]][_0x1b648d[_0x551f('4c', 'OsHR')]];
                    resolve(_0xc95be1);
                }
            }
        }
    }
})()[_0x551f('4d', 'EKqs')](_0x43de9b => {
    $['log']('', '❌ ' + $[_0x551f('4e', 'un%E')] + _0x551f('4f', 'WUH3') + _0x43de9b + '!', '');
})[_0x551f('50', 'NUSN')](() => {
    $[_0x551f('51', 'Y*HT')]();
});
var information = `Basic MTM5MDY0MTAzNUBxcS5jb206YWhncnJlYmpybjRzZjRzYw==`;
function taskPostUrl(_0x52b4ee, _0x163c97) {
    var _0x2dbb7d = {
        'ljGjs': function(_0xd7f52e, _0x5623cf) {
            return _0xd7f52e(_0x5623cf);
        },
        'SZaRQ': 'api.m.jd.com',
        'GsHvp': 'application/x-www-form-urlencoded',
        'rLhJU': _0x551f('52', ')QSH'),
        'GxiKj': _0x551f('53', 'Lsem'),
        'JmuJI': 'gzip, deflate, br'
    };
    return {
        'url': '' + JD_API_HOST,
        'body': 'functionId=' + _0x52b4ee + '&body=' + _0x2dbb7d[_0x551f('54', 'uHno')](escape, JSON[_0x551f('55', '4yT0')](_0x163c97)) + '&client=wh5&clientVersion=1.0.0',
        'headers': {
            'Cookie': cookie,
            'Host': _0x2dbb7d[_0x551f('56', 'F2n#')],
            'Connection': _0x551f('57', 'oCCQ'),
            'Content-Type': _0x2dbb7d[_0x551f('58', 'Z!Tr')],
            'User-Agent': $['isNode']() ? process[_0x551f('59', 'R*Ma')]['JD_USER_AGENT'] ? process[_0x551f('5a', 'zHZS')][_0x551f('5b', 'hHKL')] : _0x2dbb7d[_0x551f('5c', 'Lsem')](require, './USER_AGENTS')['USER_AGENT'] : $[_0x551f('5d', 'EKqs')](_0x551f('5e', '&Ao^')) ? $['getdata'](_0x2dbb7d[_0x551f('5f', 'aG7W')]) : _0x551f('60', ')wyW'),
            'Accept-Language': _0x2dbb7d[_0x551f('61', ']Wk5')],
            'Accept-Encoding': _0x2dbb7d[_0x551f('62', 'wGg0')]
        }
    };
}

function getInfo(_0x3c9f71, _0x251fc0 = ![]) {
    var _0x291e51 = {
        'zsqgO': function(_0x65e160, _0x57e501) {
            return _0x65e160(_0x57e501);
        },
        'TIaoI': _0x551f('4a', 'NUSN'),
        'KNjZZ': 'lotteryNum',
        'wyOgg': function(_0x5e9a7f, _0x5a7f25) {
            return _0x5e9a7f == _0x5a7f25;
        },
        'TqdAS': 'EGJJl',
        'cqkPj': 'FHKlJ',
        'JPDST': _0x551f('63', 'bs0$'),
        'MHSBG': _0x551f('64', 'wGg0'),
        'JHNPZ': _0x551f('65', ')!aO'),
        'WcMRC': _0x551f('66', 'qXlN'),
        'KJouB': function(_0x4956b5, _0xc82405, _0x5174ad) {
            return _0x4956b5(_0xc82405, _0x5174ad);
        },
        'Iihxm': _0x551f('67', 'R*Ma')
    };
    let _0x3201b6 = {
        'lbsCity': '12',
        'realLbsCity': _0x291e51['Iihxm'],
        'inviteId': _0x3c9f71,
        'headImg': '',
        'userName': ''
    };
    return new Promise(_0x1aa6f9 => {
        var _0x4b245b = {
            'SCHcR': _0x291e51[_0x551f('68', 'zHZS')],
            'EYONg': _0x291e51[_0x551f('69', 'gpH3')],
            'ittmd': function(_0x371041, _0x383b6e) {
                return _0x291e51[_0x551f('6a', 'NUSN')](_0x371041, _0x383b6e);
            },
            'mRCqz': _0x291e51[_0x551f('6b', 'nf1g')],
            'rGezN': _0x291e51[_0x551f('6c', '[i0*')],
            'yZyYt': function(_0x242fc5, _0x5b230d) {
                return _0x291e51[_0x551f('6d', 'F2n#')](_0x242fc5, _0x5b230d);
            },
            'ognUt': 'bizCode',
            'CQCSR': _0x291e51[_0x551f('6e', 'nf1g')],
            'XDATg': function(_0x5177b3, _0x2bd369) {
                return _0x5177b3 !== _0x2bd369;
            },
            'IdLRN': _0x291e51['MHSBG'],
            'hPpll': _0x291e51[_0x551f('6f', 'Y*HT')]
        };
        if (_0x551f('70', 'nf1g') === _0x291e51[_0x551f('71', 'E!gK')]) {
            _0x291e51['zsqgO'](_0x1aa6f9, data);
        } else {
            $['post'](_0x291e51['KJouB'](taskPostUrl, _0x551f('72', 'qXlN'), _0x3201b6), async(_0x39962b, _0x2c676b, _0x484133) => {
                var _0x3dae81 = {
                    'CzxXa': function(_0x849e07, _0x41b5a4) {
                        return _0x849e07(_0x41b5a4);
                    },
                    'conlc': function(_0x22d946, _0x5d5605) {
                        return _0x22d946 === _0x5d5605;
                    },
                    'eQxLJ': _0x4b245b[_0x551f('73', 'Z!Tr')],
                    'Thwkb': _0x551f('74', 'zHZS'),
                    'dyyYD': _0x551f('75', 'HlON'),
                    'ZJqAh': _0x4b245b[_0x551f('76', 'm2qs')],
                    'MExsD': function(_0x220d99, _0x13e715) {
                        return _0x220d99(_0x13e715);
                    },
                    'nsmVq': function(_0x4ad3be, _0x3fa0aa) {
                        return _0x4b245b[_0x551f('77', ')!aO')](_0x4ad3be, _0x3fa0aa);
                    }
                };
                try {
                    if (_0x4b245b['mRCqz'] === _0x4b245b[_0x551f('78', 'gpH3')]) {
                        if (_0x3dae81[_0x551f('79', 'wGg0')](safeGet, _0x484133)) {
                            console[_0x551f('7a', 'b7uC')](_0x551f('7b', 'uJy8') + _0x484133);
                            _0x484133 = JSON[_0x551f('7c', '[G7V')](_0x484133);
                            if (_0x3dae81['conlc'](_0x484133[_0x3dae81[_0x551f('7d', 'uTl]')]][_0x3dae81[_0x551f('7e', 'P&87')]], 0x0)) {
                                const _0x3e105c = _0x484133[_0x551f('7f', '[G7V')][_0x3dae81[_0x551f('80', 'qXlN')]][_0x3dae81['ZJqAh']];
                                _0x3dae81['MExsD'](_0x1aa6f9, _0x3e105c);
                            }
                        }
                    } else {
                        if (_0x39962b) {
                            console['log']('' + JSON['stringify'](_0x39962b));
                            console['log']($[_0x551f('81', '&Ao^')] + _0x551f('82', 'nf1g'));
                        } else {
                            if (_0x4b245b['yZyYt'](safeGet, _0x484133)) {
                                _0x484133 = JSON[_0x551f('83', 'R*Ma')](_0x484133);
                                if (_0x484133[_0x551f('84', 'm2qs')] && !_0x484133[_0x551f('85', 'uHno')][_0x551f('86', '2#[v')][_0x551f('87', 'Y*HT')][_0x551f('88', 'Z!Tr')]) {
                                    console[_0x551f('89', 'wGg0')]('账号已黑，看不到邀请码');
                                } else {
                                    if (_0x251fc0) console[_0x551f('8a', 'WUH3')](_0x551f('8b', 'tisG') + (_0x484133['data'] && _0x484133[_0x551f('84', 'm2qs')][_0x551f('e', 'kn5&')][_0x551f('8c', 'wbkX')][_0x551f('8d', '2#[v')]) + _0x551f('8e', 'oRQB'));
                                } if (_0x484133['data'] && _0x484133[_0x4b245b[_0x551f('8f', '[G7V')]][_0x4b245b[_0x551f('90', 'zqIg')]] === 0x0) {
                                    if (_0x4b245b[_0x551f('91', 'Xe(l')] === 'hrxpt') {
                                        for (let _0x21a760 of _0x484133[_0x551f('92', 'oRQB')][_0x551f('93', 'zHZS')] && _0x484133[_0x551f('94', ']Wk5')]['result'][_0x551f('95', '(W!2')] || []) {
                                            if (_0x4b245b[_0x551f('96', 'h5PE')]('QpTsL', _0x4b245b[_0x551f('97', ']Wk5')])) {
                                                if (_0x21a760['remaingAssistNum'] === 0x0 && _0x21a760['status'] === '1') {
                                                    console[_0x551f('98', 'm2qs')](_0x21a760[_0x551f('99', 'Gf[z')]);
                                                    await _0x4b245b[_0x551f('9a', 'Z!Tr')](receiveCash, _0x21a760['roundNum']);
                                                    await $['wait'](0x2 * 0x3e8);
                                                }
                                            } else {
                                                $[_0x551f('9b', 'tisG')] = ![];
                                                return;
                                            }
                                        }
                                    } else {
                                        if (_0x3dae81[_0x551f('9c', '[G7V')](typeof JSON['parse'](_0x484133), _0x551f('9d', 'un%E'))) {
                                            return !![];
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x33d870) {
                    $[_0x551f('9e', '&Ao^')](_0x33d870, _0x2c676b);
                } finally {
                    if (_0x4b245b[_0x551f('9f', 'HlON')] === _0x4b245b[_0x551f('a0', 'WUH3')]) {
                        _0x4b245b[_0x551f('a1', '$vT7')](_0x1aa6f9, _0x484133);
                    } else {
                        console[_0x551f('a2', 'uTl]')](_0x551f('a3', 'kn5&'));
                    }
                }
            });
        }
    });
}
function receiveCash(_0x1e74d2) {
    var _0x1f0795 = {
        'JhaFn': function(_0x240744, _0x4ea8e4) {
            return _0x240744 !== _0x4ea8e4;
        },
        'mosks': _0x551f('a4', 'WUH3'),
        'IkOjU': _0x551f('a5', ']Wk5'),
        'PWHmN': function(_0x438fc2, _0xb3e1d9) {
            return _0x438fc2(_0xb3e1d9);
        },
        'GENqP': function(_0x98f044, _0x4f784c) {
            return _0x98f044 === _0x4f784c;
        },
        'Ahctq': _0x551f('a6', '6)c1'),
        'OAhlp': 'MQYyV',
        'wfHUt': _0x551f('a7', 'qXlN')
    };
    let _0x204ec0 = {
        'cashType': 0x1,
        'roundNum': _0x1e74d2
    };
    return new Promise(_0x3e1193 => {
        $[_0x551f('a8', 'R*Ma')](taskPostUrl(_0x1f0795[_0x551f('a9', 'b7uC')], _0x204ec0), async(_0x1464b3, _0x148d49, _0x8f1b2) => {
            try {
                if (_0x1f0795[_0x551f('aa', 'EKqs')](_0x1f0795['mosks'], _0x1f0795[_0x551f('ab', 'oCCQ')])) {
                    if (_0x1464b3) {
                        if ('FLsoV' === _0x551f('ac', 'h5PE')) {
                            _0x8f1b2 = JSON[_0x551f('ad', 'WUH3')](_0x8f1b2);
                        } else {
                            console['log']('' + JSON[_0x551f('ae', 'nf1g')](_0x1464b3));
                            console[_0x551f('44', 'HlON')]($['name'] + _0x551f('af', 'P&87'));
                        }
                    } else {
                        if (_0x1f0795[_0x551f('b0', '4yT0')](safeGet, _0x8f1b2)) {
                            if (_0x1f0795['GENqP'](_0x1f0795[_0x551f('b1', 'Z!Tr')], _0x1f0795['OAhlp'])) {
                                $[_0x551f('b2', ']Wk5')](e, _0x148d49);
                            } else {
                                console['log'](_0x551f('b3', 'zqIg') + _0x8f1b2);
                                _0x8f1b2 = JSON['parse'](_0x8f1b2);
                                if (_0x8f1b2[_0x551f('b4', 'P&87')][_0x551f('b5', 'un%E')] === 0x0) {
                                    console[_0x551f('b6', '[G7V')]('获得 ' + _0x8f1b2[_0x551f('b7', 'GQ6r')][_0x551f('b8', 'oRQB')][_0x551f('b9', 'P&87')] + _0x551f('ba', 'R*Ma') + _0x8f1b2[_0x551f('bb', 'wbkX')][_0x551f('bc', 'Y*HT')][_0x551f('bd', ')QSH')] + ' 元');
                                }
                            }
                        }
                    }
                } else {
                    console[_0x551f('be', 'uHno')](_0x551f('bf', ')!aO'));
                }
            } catch (_0xbd66e4) {
                $[_0x551f('c0', 'HlON')](_0xbd66e4, _0x148d49);
            } finally {
                if (_0x1f0795['GENqP'](_0x551f('c1', 'uTl]'), _0x551f('c1', 'uTl]'))) {
                    _0x1f0795[_0x551f('c2', '2#[v')](_0x3e1193, _0x8f1b2);
                } else {
                    console[_0x551f('7a', 'b7uC')]('' + JSON[_0x551f('c3', 'Y*HT')](_0x1464b3));
                    console[_0x551f('c4', 'Gf[z')]($[_0x551f('c5', 'wbkX')] + _0x551f('c6', 'Gf[z'));
                }
            }
        });
    });
}

function getInviteInfo() {
    var _0x4faf3e = {
        'skDZo': 'CookieJD',
        'QpeQL': _0x551f('c7', 'wGg0'),
        'GVgeF': _0x551f('c8', 'wbkX'),
        'LfiwF': _0x551f('c9', 'oCCQ'),
        'dKTEX': function(_0x1a518f, _0xdc21f5) {
            return _0x1a518f(_0xdc21f5);
        },
        'UdhEg': function(_0x24efcf, _0x11613e) {
            return _0x24efcf !== _0x11613e;
        },
        'seWkU': 'llxMF',
        'FPbzW': 'iRqHY',
        'UtQXM': _0x551f('ca', 'Gf[z'),
        'ulJKr': _0x551f('cb', 'qXlN'),
        'YOWZG': _0x551f('cc', '4yT0'),
        'zBLNm': _0x551f('cd', 'wbkX'),
        'LdhWi': function(_0x56ccff, _0x57fa8f, _0x133f68) {
            return _0x56ccff(_0x57fa8f, _0x133f68);
        },
        'Cbogl': _0x551f('ce', 'qXlN')
    };
    let _0x674757 = {};
    return new Promise(_0x3e3a38 => {
        var _0x24eb50 = {
            'PDDWP': _0x551f('92', 'oRQB'),
            'sbOXc': _0x4faf3e[_0x551f('cf', 'aG7W')]
        };
        if (_0x4faf3e[_0x551f('d0', 'm2qs')] === _0x551f('d1', 'Z!Tr')) {
            $[_0x551f('d2', 'aG7W')](_0x4faf3e[_0x551f('d3', 'zHZS')](taskPostUrl, _0x4faf3e['Cbogl'], _0x674757), async(_0x22b2c1, _0x49ed6c, _0x2819f3) => {
                var _0x5b761c = {
                    'NwnEW': _0x4faf3e[_0x551f('d4', ')wyW')],
                    'wvqaR': _0x4faf3e['QpeQL'],
                    'TeNiA': _0x4faf3e['GVgeF']
                };
                try {
                    if (_0x22b2c1) {
                        if (_0x4faf3e[_0x551f('d5', '2#[v')] === _0x4faf3e[_0x551f('d6', 'gpH3')]) {
                            console['log']('' + JSON['stringify'](_0x22b2c1));
                            console[_0x551f('d7', 'qXlN')]($['name'] + _0x551f('d8', 'Lsem'));
                        } else {
                            console['log']('领红包结果' + _0x2819f3);
                            _0x2819f3 = JSON[_0x551f('d9', 'hHKL')](_0x2819f3);
                            if (_0x2819f3[_0x24eb50[_0x551f('da', 'F2n#')]][_0x24eb50[_0x551f('db', '[i0*')]] === 0x0) {
                                console[_0x551f('be', 'uHno')](_0x551f('dc', 'm2qs') + _0x2819f3['data']['result'][_0x551f('dd', 'h5PE')] + ' 元，共计 ' + _0x2819f3[_0x551f('b7', 'GQ6r')]['result'][_0x551f('de', 'zHZS')] + ' 元');
                            }
                        }
                    } else {
                        if (_0x4faf3e['dKTEX'](safeGet, _0x2819f3)) {
                            _0x2819f3 = JSON['parse'](_0x2819f3);
                        }
                    }
                } catch (_0x5d49e9) {
                    if (_0x4faf3e['UdhEg'](_0x4faf3e[_0x551f('df', ')wyW')], _0x4faf3e[_0x551f('e0', '2#[v')])) {
                        $['logErr'](_0x5d49e9, _0x49ed6c);
                    } else {
                        cookiesArr = [$[_0x551f('e1', 'P&87')](_0x5b761c['NwnEW']), $['getdata'](_0x5b761c[_0x551f('e2', 'NUSN')]), ...jsonParse($[_0x551f('e3', 'wGg0')](_0x5b761c[_0x551f('e4', ')wyW')]) || '[]')[_0x551f('e5', 'zHZS')](_0xb4bdb3 => _0xb4bdb3[_0x551f('e6', 'P&87')])][_0x551f('e7', 'wGg0')](_0x1d68f6 => !!_0x1d68f6);
                    }
                } finally {
                    if (_0x4faf3e['UtQXM'] === _0x4faf3e[_0x551f('e8', 'zqIg')]) {
                        $[_0x551f('e9', 'hHKL')] = [...new Set([...$['newShareCodes'], ...readShareCodeRes[_0x551f('ea', 'h5PE')] || []])];
                    } else {
                        _0x3e3a38(_0x2819f3);
                    }
                }
            });
        } else {
            if (shareCodes[item]) {
                $[_0x551f('eb', '&Ao^')][_0x551f('ec', 'un%E')](shareCodes[item]);
            }
        }
    });
}

function city_lotteryAward() {
    var _0x1dba1f = {
        'jgOhT': function(_0x15816a, _0x1de301) {
            return _0x15816a === _0x1de301;
        },
        'vRfuu': _0x551f('ed', 'zqIg'),
        'XzSlt': function(_0x168518, _0x27f09b) {
            return _0x168518(_0x27f09b);
        },
        'vqgab': 'bizCode',
        'ZUXiR': _0x551f('ee', 'qXlN'),
        'ysCVa': _0x551f('ef', 'GQ6r'),
        'uOLOp': _0x551f('f0', 'R*Ma'),
        'XvQHi': function(_0x368479, _0x3840a4) {
            return _0x368479(_0x3840a4);
        },
        'zUTJN': _0x551f('f1', 'Wkb0'),
        'ZJrPH': _0x551f('f2', 'un%E'),
        'oGdSZ': _0x551f('f3', 'nf1g'),
        'qzXnx': _0x551f('f4', 'EKqs'),
        'IKXYe': _0x551f('f5', 'wbkX'),
        'GxsBk': 'xbWzT',
        'NnEaW': function(_0x29b754, _0x2c0b4e, _0x37911a) {
            return _0x29b754(_0x2c0b4e, _0x37911a);
        },
        'dZWGP': _0x551f('f6', 'OsHR')
    };
    let _0x40765b = {};
    return new Promise(_0x3502b3 => {
        var _0x50ec7c = {
            'ehdEk': function(_0x25cad8, _0x55542a) {
                return _0x1dba1f[_0x551f('f7', 'F2n#')](_0x25cad8, _0x55542a);
            },
            'gbhlG': 'retcode',
            'EjsfA': _0x1dba1f[_0x551f('f8', '6)c1')],
            'UfZqZ': function(_0x51d701, _0x4963d4) {
                return _0x1dba1f[_0x551f('f9', 'h5PE')](_0x51d701, _0x4963d4);
            },
            'WtXpI': _0x1dba1f[_0x551f('fa', 'Wkb0')],
            'XinCM': function(_0x1cd434, _0xf1c4b) {
                return _0x1cd434 !== _0xf1c4b;
            },
            'WjvCZ': _0x1dba1f[_0x551f('fb', '(W!2')],
            'gvoiz': _0x1dba1f[_0x551f('fc', 'NUSN')],
            'euPdT': function(_0x2a016e, _0x17e1f0) {
                return _0x1dba1f[_0x551f('fd', ')QSH')](_0x2a016e, _0x17e1f0);
            },
            'svmVC': _0x1dba1f[_0x551f('fe', 'oCCQ')],
            'XpoRO': function(_0x5a150c, _0x1e8079) {
                return _0x1dba1f[_0x551f('ff', 'R*Ma')](_0x5a150c, _0x1e8079);
            },
            'olHNQ': _0x1dba1f[_0x551f('100', 'OsHR')],
            'MpFRi': _0x1dba1f[_0x551f('101', 'uTl]')],
            'wnTEL': _0x1dba1f[_0x551f('102', 'b7uC')],
            'wkrZy': _0x1dba1f[_0x551f('103', 'WUH3')],
            'hGWdh': function(_0x1cdb7d, _0x829684) {
                return _0x1dba1f['XvQHi'](_0x1cdb7d, _0x829684);
            },
            'lGdWr': _0x1dba1f[_0x551f('104', 'wGg0')],
            'gvwfA': _0x1dba1f[_0x551f('105', 'GQ6r')]
        };
        $[_0x551f('106', 'zqIg')](_0x1dba1f[_0x551f('107', 'Xe(l')](taskPostUrl, _0x1dba1f[_0x551f('108', 'R*Ma')], _0x40765b), async(_0x5438c7, _0x4732df, _0x5d7568) => {
            try {
                if (_0x50ec7c[_0x551f('109', '2#[v')](_0x50ec7c[_0x551f('10a', ']Wk5')], _0x50ec7c[_0x551f('10b', 'qXlN')])) {
                    if (_0x5438c7) {
                        console[_0x551f('10c', '2#[v')]('' + JSON['stringify'](_0x5438c7));
                        console[_0x551f('10d', 'hHKL')]($['name'] + _0x551f('10e', 'Z!Tr'));
                    } else {
                        if (_0x50ec7c['euPdT'](_0x50ec7c['svmVC'], _0x50ec7c[_0x551f('10f', 'Z!Tr')])) {
                            if (_0x50ec7c['XpoRO'](safeGet, _0x5d7568)) {
                                if (_0x50ec7c[_0x551f('110', 'hT6j')] !== _0x50ec7c['olHNQ']) {
                                    $['logErr'](e, _0x4732df);
                                } else {
                                    console['log'](_0x551f('111', 'Xe(l') + _0x5d7568);
                                    _0x5d7568 = JSON[_0x551f('112', 'Y*HT')](_0x5d7568);
                                    if (_0x5d7568[_0x551f('113', 'E!gK')][_0x50ec7c[_0x551f('114', 'R*Ma')]] === 0x0) {
                                        const _0x2f295a = _0x5d7568[_0x50ec7c['MpFRi']][_0x50ec7c['wnTEL']][_0x50ec7c['wkrZy']];
                                        _0x50ec7c[_0x551f('115', ')QSH')](_0x3502b3, _0x2f295a);
                                    }
                                }
                            }
                        } else {
                            _0x5d7568 = JSON['parse'](_0x5d7568);
                            if (_0x50ec7c[_0x551f('116', 'un%E')](_0x5d7568[_0x50ec7c[_0x551f('117', '[i0*')]], 0xd)) {
                                $[_0x551f('118', 'E!gK')] = ![];
                                return;
                            }
                            if (_0x50ec7c[_0x551f('119', 'EKqs')](_0x5d7568[_0x50ec7c['gbhlG']], 0x0)) {
                                $[_0x551f('11a', 'wGg0')] = _0x5d7568[_0x50ec7c[_0x551f('11b', ')wyW')]] && _0x5d7568[_0x50ec7c[_0x551f('11c', '2#[v')]]['nickname'] || $[_0x551f('11d', 'qXlN')];
                            } else {
                                $[_0x551f('11e', '[i0*')] = $[_0x551f('11f', 'wbkX')];
                            }
                        }
                    }
                } else {
                    shareCodes = process[_0x551f('120', ')!aO')]['CITY_SHARECODES'][_0x551f('121', 'kn5&')]('');
                }
            } catch (_0x5653a4) {
                if (_0x50ec7c[_0x551f('122', 'nf1g')](_0x551f('123', 'kn5&'), _0x50ec7c[_0x551f('124', 'bs0$')])) {
                    $[_0x551f('125', 'R*Ma')](_0x5653a4, _0x4732df);
                } else {
                    return !![];
                }
            } finally {
                if (_0x50ec7c[_0x551f('126', '&Ao^')] !== _0x50ec7c[_0x551f('127', '(W!2')]) {
                    if (_0x50ec7c[_0x551f('128', 'EKqs')](safeGet, _0x5d7568)) {
                        console[_0x551f('b6', '[G7V')]('领红包结果' + _0x5d7568);
                        _0x5d7568 = JSON['parse'](_0x5d7568);
                        if (_0x5d7568[_0x551f('129', 'kn5&')][_0x50ec7c[_0x551f('12a', 'E!gK')]] === 0x0) {
                            console['log']('获得 ' + _0x5d7568[_0x551f('12b', 'EKqs')]['result'][_0x551f('12c', 'kn5&')] + _0x551f('12d', '[i0*') + _0x5d7568[_0x551f('f2', 'un%E')]['result']['totalCash'] + ' 元');
                        }
                    }
                } else {
                    _0x3502b3();
                }
            }
        });
    });
}

function readShareCode() {
    var _0x2689bf = {
        'EipEt': function(_0x59ce71, _0x52ceb2) {
            return _0x59ce71 === _0x52ceb2;
        },
        'dzoUe': _0x551f('12e', 'bs0$'),
        'MXnjj': 'dZPJO',
        'vhrgc': function(_0x2f9270, _0x2942a3) {
            return _0x2f9270 !== _0x2942a3;
        },
        'cdQls': _0x551f('12f', 'Y*HT'),
        'VjpOu': 'BTeEc',
        'Tesoo': 'vCSyh',
        'BweCw': _0x551f('130', 'F2n#'),
        'KvcQu': function(_0x3f9303, _0x51ff13) {
            return _0x3f9303(_0x51ff13);
        },
        'hHpXj': function(_0x56b56a) {
            return _0x56b56a();
        }
    };
    console['log']('开始');
    return new Promise(async _0x593827 => {
        var _0x3b29f0 = {
            'kINOr': function(_0x4bd40a, _0x4a4a92) {
                return _0x4bd40a(_0x4a4a92);
            },
            'sZXfT': function(_0x20f36d, _0x122fb7) {
                return _0x2689bf[_0x551f('131', 'Y*HT')](_0x20f36d, _0x122fb7);
            },
            'nMFwG': _0x2689bf[_0x551f('132', 'F2n#')],
            'fHlyW': 'Ayarh',
            'lQQzL': _0x551f('133', 'qXlN'),
            'mHVYc': function(_0x5bc661, _0x20adbe) {
                return _0x2689bf[_0x551f('134', '(W!2')](_0x5bc661, _0x20adbe);
            },
            'oozpR': _0x2689bf[_0x551f('135', 'bs0$')],
            'VxbTc': function(_0x1e1886, _0x5499be) {
                return _0x2689bf[_0x551f('136', 'Y*HT')](_0x1e1886, _0x5499be);
            },
            'BvIcy': _0x2689bf[_0x551f('137', 'Wkb0')],
            'kUHYN': _0x2689bf[_0x551f('138', 'kn5&')],
            'ycxQw': _0x2689bf[_0x551f('139', 'zqIg')],
            'CCDyt': _0x2689bf['BweCw'],
            'tFvad': function(_0x3042dc, _0x5e5250) {
                return _0x2689bf['KvcQu'](_0x3042dc, _0x5e5250);
            }
        };
        $['get']({
            'url': 'https://dav.jianguoyun.com/dav/jd_cityPowerpool/database.json',
            headers: {
                "Authorization": information,
                "Content-Type": "text/plain;charset=UTF-8",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                "User-Agent": "okhttp/3.12.1"
            }
        }, (_0x2c9dd3, _0x3a8a24, _0x37233e) => {
            if (_0x3b29f0[_0x551f('13b', '$vT7')] === _0x3b29f0[_0x551f('13c', 'hHKL')]) {
                console['log']('' + JSON[_0x551f('13d', 'qXlN')](_0x2c9dd3));
                console['log']($[_0x551f('2f', 'E!gK')] + _0x551f('13e', 'wGg0'));
            } else {
                try {
                    if (_0x3b29f0['mHVYc'](_0x551f('13f', 'Lsem'), _0x3b29f0[_0x551f('140', 'Lsem')])) {
                        if (_0x2c9dd3) {
                            if (_0x3b29f0[_0x551f('141', 'GQ6r')](_0x3b29f0[_0x551f('142', 'un%E')], _0x551f('143', 'OsHR'))) {
                                _0x3b29f0['kINOr'](_0x593827, _0x37233e);
                            } else {
                                console[_0x551f('144', 'hT6j')]('' + JSON[_0x551f('145', '6)c1')](_0x2c9dd3));
                                console['log']($[_0x551f('146', 'wGg0')] + _0x551f('d8', 'Lsem'));
                            }
                        } else {
                            if (_0x37233e) {
                                if ('BTeEc' !== _0x3b29f0[_0x551f('147', '(W!2')]) {
                                    exchangeFlag = process[_0x551f('148', 'nf1g')][_0x551f('149', 'WUH3')] || exchangeFlag;
                                } else {
                                    _0x37233e = JSON['parse'](_0x37233e);
                                }
                            }
                        }
                    } else {
                        Object['keys'](jdCookieNode)[_0x551f('14a', ']Wk5')](_0x2bd6f7 => {
                            cookiesArr[_0x551f('14b', '$vT7')](jdCookieNode[_0x2bd6f7]);
                        });
                        if (process['env'][_0x551f('14c', 'OsHR')] && _0x3b29f0[_0x551f('14d', 'wbkX')](process['env'][_0x551f('14e', 'GQ6r')], _0x3b29f0[_0x551f('14f', 'EKqs')])) console['log'] = () => {};
                    }
                } catch (_0x47631c) {
                    if (_0x3b29f0[_0x551f('150', '2#[v')]('vCSyh', _0x3b29f0[_0x551f('151', 'oRQB')])) {
                        $[_0x551f('152', 'uTl]')](_0x47631c, _0x3a8a24);
                    } else {
                        $[_0x551f('153', 'Lsem')](_0x47631c, _0x3a8a24);
                    }
                } finally {
                    if (_0x3b29f0[_0x551f('154', ')wyW')](_0x3b29f0['CCDyt'], _0x551f('155', 'Gf[z'))) {
                        _0x3b29f0[_0x551f('156', ']Wk5')](_0x593827, _0x37233e);
                    } else {
                        cookiesArr['push'](jdCookieNode[item]);
                    }
                }
            }
        });
        await $[_0x551f('157', 'NUSN')](0x2710);
        _0x2689bf[_0x551f('158', 'OsHR')](_0x593827);
    });
}

function shareCodesFormat() {
    var _0x797e35 = {
        'mDLlq': function(_0x1e2b05, _0x25aa25) {
            return _0x1e2b05 - _0x25aa25;
        },
        'WulCe': function(_0x2f806c) {
            return _0x2f806c();
        }
    };
    return new Promise(async _0x47f940 => {
        $[_0x551f('159', 'oRQB')] = [];
        if ($['shareCodesArr'][_0x797e35['mDLlq']($[_0x551f('15a', 'hHKL')], 0x1)]) {
            $[_0x551f('15b', ')!aO')] = $[_0x551f('15c', '[i0*')][$[_0x551f('15d', 'wGg0')] - 0x1][_0x551f('15e', '[G7V')]('@');
        } else {
            console['log']('由于您第' + $['index'] + _0x551f('15f', 'uJy8'));
            const _0x18eb6b = $[_0x551f('160', 'R*Ma')] > inviteCodes['length'] ? _0x797e35[_0x551f('161', '(W!2')](inviteCodes['length'], 0x1) : $['index'] - 0x1;
            $[_0x551f('162', 'uTl]')] = inviteCodes[_0x18eb6b]['split']('@');
        }
        if(abcde == 0){
            let slee = Math.floor(Math.random() * 9000) 
            console.log(`\n************第一次获取互助码随机延时${slee}毫秒************\n`);
            await $.wait(slee);
            abcde = 1
            console[_0x551f('7a', 'b7uC')]('1')
            var abc = await _0x797e35[_0x551f('163', 'm2qs')](readShareCode)
        }
        const _0x59bbb8 = abc;
        if (_0x59bbb8 && _0x59bbb8['code'] === 0xc8) {
            // $['newShareCodes'] = [...new Set([..._0x59bbb8[_0x551f('165', 'qXlN')] || []])];
            let inviteCodes = _0x59bbb8[_0x551f('165', 'qXlN')]
            let length= inviteCodes.length;
            while(length > 1){
                let index = Math.floor(Math.random() * length--);
                [inviteCodes[length], inviteCodes[index]] = [inviteCodes[index], inviteCodes[length]];
            }//随机
            $['newShareCodes'] = inviteCodes
            var abc = inviteCodes
        }
        console[_0x551f('7a', 'b7uC')]('第' + $[_0x551f('166', 'Gf[z')] + _0x551f('167', 'P&87') + JSON[_0x551f('168', 'aG7W')]($['newShareCodes']));
        _0x797e35[_0x551f('169', 'qXlN')](_0x47f940);
    });
}

function requireConfig() {
    var _0x259b3c = {
        'oarrM': '请勿随意在BoxJs输入框修改内容建议通过脚本去获取cookie',
        'flmhr': 'data',
        'SBujP': 'result',
        'kPlrW': 'lotteryNum',
        'YXuhA': function(_0x4b035d, _0x96a08e) {
            return _0x4b035d(_0x96a08e);
        },
        'gohLz': function(_0x45727d, _0x810f83) {
            return _0x45727d > _0x810f83;
        },
        'oaxUD': _0x551f('16a', '6)c1'),
        'lnNdv': function(_0x6f1e1a, _0x5ad608) {
            return _0x6f1e1a !== _0x5ad608;
        },
        'PlGmM': 'cxaJu',
        'PhicU': function(_0x5b587b, _0x33ebb5) {
            return _0x5b587b === _0x33ebb5;
        },
        'AYxtq': 'xseLT',
        'yflfl': function(_0x23bf03, _0x25b56f) {
            return _0x23bf03 !== _0x25b56f;
        },
        'LzKei': 'bBPTY',
        'gcBAb': function(_0x2412cb) {
            return _0x2412cb();
        }
    };
    return new Promise(_0x328e13 => {
        var _0x5daeed = {
            'foFRa': function(_0x3a1e04, _0x392150) {
                return _0x259b3c[_0x551f('16b', '[i0*')](_0x3a1e04, _0x392150);
            },
            'llQZP': function(_0x396616, _0x48ed9e) {
                return _0x396616 - _0x48ed9e;
            }
        };
        if (_0x259b3c['oaxUD'] === _0x551f('16c', 'P&87')) {
            console['log'](e);
            $[_0x551f('16d', 'nf1g')]($[_0x551f('16e', '(W!2')], '', _0x259b3c[_0x551f('16f', 'R*Ma')]);
            return [];
        } else {
            console[_0x551f('170', 'tisG')](_0x551f('171', '$vT7') + $[_0x551f('146', 'wGg0')] + _0x551f('172', 'b7uC'));
            let _0x16624c = [];
            if ($[_0x551f('173', 'Gf[z')]()) {
                if (_0x259b3c['lnNdv'](_0x551f('174', ')QSH'), _0x259b3c[_0x551f('175', '$vT7')])) {
                    if (process['env'][_0x551f('176', 'oCCQ')]) {
                        exchangeFlag = process[_0x551f('177', 'EKqs')][_0x551f('178', 'tisG')] || exchangeFlag;
                    }
                    if (process[_0x551f('179', 'Z!Tr')]['CITY_SHARECODES']) {
                        if (_0x259b3c['PhicU']('xseLT', _0x259b3c[_0x551f('17a', '6)c1')])) {
                            if (process[_0x551f('17b', '[G7V')][_0x551f('17c', 'OsHR')][_0x551f('17d', 'NUSN')]('') > -0x1) {
                                if (_0x259b3c[_0x551f('17e', ')wyW')]('NdWxj', 'NdWxj')) {
                                    const _0xcc5f36 = data[_0x259b3c[_0x551f('17f', 'GQ6r')]][_0x259b3c[_0x551f('180', 'm2qs')]][_0x259b3c['kPlrW']];
                                    _0x259b3c[_0x551f('181', 'bs0$')](_0x328e13, _0xcc5f36);
                                } else {
                                    _0x16624c = process[_0x551f('182', 'Wkb0')]['CITY_SHARECODES'][_0x551f('183', '[i0*')]('');
                                }
                            } else {
                                if (_0x259b3c[_0x551f('184', ')QSH')] === _0x551f('185', 'Z!Tr')) {
                                    if (data) {
                                        data = JSON[_0x551f('186', 'zqIg')](data);
                                    }
                                } else {
                                    _0x16624c = process[_0x551f('187', 'm2qs')][_0x551f('188', 'NUSN')]['split']('&');
                                }
                            }
                        } else {
                            console[_0x551f('10c', '2#[v')]('' + JSON[_0x551f('189', '(W!2')](err));
                            console[_0x551f('18a', 'E!gK')]($[_0x551f('18b', ')wyW')] + _0x551f('18c', 'tisG'));
                        }
                    }
                } else {
                    console[_0x551f('98', 'm2qs')]('由于您第' + $[_0x551f('18d', 'wbkX')] + _0x551f('18e', 'bs0$'));
                    const _0x1a5687 = _0x5daeed[_0x551f('18f', 'wGg0')]($['index'], inviteCodes[_0x551f('190', 'OsHR')]) ? inviteCodes[_0x551f('191', '4yT0')] - 0x1 : _0x5daeed['llQZP']($['index'], 0x1);
                    $[_0x551f('192', 'uHno')] = inviteCodes[_0x1a5687][_0x551f('193', 'hHKL')]('@');
                }
            }
            console[_0x551f('194', ']Wk5')]('共' + cookiesArr['length'] + _0x551f('195', 'E!gK'));
            $[_0x551f('196', ']Wk5')] = [];
            if ($[_0x551f('197', ')!aO')]()) {
                Object[_0x551f('198', 'wbkX')](_0x16624c)['forEach'](_0xe6e37b => {
                    if (_0x16624c[_0xe6e37b]) {
                        $['shareCodesArr'][_0x551f('199', 'uTl]')](_0x16624c[_0xe6e37b]);
                    }
                });
            }
            console[_0x551f('7a', 'b7uC')](_0x551f('19a', 'zHZS') + $[_0x551f('19b', 'un%E')]['length'] + '个账号的' + $[_0x551f('19c', 'aG7W')] + _0x551f('19d', 'b7uC'));
            _0x259b3c[_0x551f('19e', 'tisG')](_0x328e13);
        }
    });
}

function TotalBean() {
    var _0x546b4c = {
        'hnsNm': function(_0x4f38d9, _0x168bbe) {
            return _0x4f38d9(_0x168bbe);
        },
        'qJEIK': function(_0x34465e, _0x565e50) {
            return _0x34465e !== _0x565e50;
        },
        'fdaNc': _0x551f('19f', 'tisG'),
        'CsPom': function(_0x11235c, _0x51fa05) {
            return _0x11235c === _0x51fa05;
        },
        'CHVJC': _0x551f('1a0', 'Xe(l'),
        'HKltc': _0x551f('1a1', '6)c1'),
        'ekbfv': function(_0xa53402) {
            return _0xa53402();
        },
        'PiiwQ': _0x551f('1a2', 'OsHR'),
        'QxotT': 'application/x-www-form-urlencoded',
        'cbtJk': _0x551f('1a3', ']Wk5'),
        'ozrmL': _0x551f('1a4', 'uTl]'),
        'zTVpr': _0x551f('1a5', 'h5PE'),
        'WWJOf': 'JDUA',
        'OFlGw': _0x551f('1a6', 'kn5&')
    };
    return new Promise(async _0x4ece29 => {
        var _0x41fa46 = {
            'boVXi': function(_0x5ab789, _0x1a5526) {
                return _0x546b4c['hnsNm'](_0x5ab789, _0x1a5526);
            },
            'UPhPV': function(_0x180a11, _0x1a10fd) {
                return _0x546b4c[_0x551f('1a7', 'qXlN')](_0x180a11, _0x1a10fd);
            },
            'StATy': _0x546b4c['fdaNc'],
            'bObGt': function(_0x9ed8d, _0x423b64) {
                return _0x546b4c[_0x551f('1a8', ')wyW')](_0x9ed8d, _0x423b64);
            },
            'WeZnu': _0x546b4c[_0x551f('1a9', '$vT7')],
            'YEHPq': _0x551f('1aa', 'Z!Tr'),
            'Hrbhd': _0x546b4c['HKltc'],
            'SYVUX': function(_0x5a9b1a, _0x5c671d) {
                return _0x546b4c[_0x551f('1ab', 'OsHR')](_0x5a9b1a, _0x5c671d);
            },
            'PAqWv': function(_0x519a2c) {
                return _0x546b4c[_0x551f('1ac', 'R*Ma')](_0x519a2c);
            }
        };
        if (_0x546b4c[_0x551f('1ad', '$vT7')]('CsGPE', _0x551f('1ae', ']Wk5'))) {
            const _0x5e7c85 = {
                'url': _0x551f('1af', ')wyW'),
                'headers': {
                    'Accept': _0x546b4c[_0x551f('1b0', 'Z!Tr')],
                    'Content-Type': _0x546b4c[_0x551f('1b1', 'wGg0')],
                    'Accept-Encoding': _0x551f('1b2', 'zqIg'),
                    'Accept-Language': _0x546b4c['cbtJk'],
                    'Connection': _0x546b4c['ozrmL'],
                    'Cookie': cookie,
                    'Referer': _0x546b4c[_0x551f('1b3', 'zqIg')],
                    'User-Agent': $['isNode']() ? process[_0x551f('2', 'wbkX')]['JD_USER_AGENT'] ? process['env'][_0x551f('1b4', 'b7uC')] : _0x546b4c['hnsNm'](require, './USER_AGENTS')[_0x551f('1b5', ')!aO')] : $['getdata'](_0x546b4c['WWJOf']) ? $[_0x551f('1b6', 'WUH3')](_0x546b4c[_0x551f('1b7', 'nf1g')]) : _0x546b4c[_0x551f('1b8', 'zHZS')]
                }
            };
            $[_0x551f('1b9', 'Gf[z')](_0x5e7c85, (_0x4c0a4c, _0x26952b, _0x6ffac3) => {
                try {
                    if (_0x4c0a4c) {
                        console['log']('' + JSON[_0x551f('1ba', 'kn5&')](_0x4c0a4c));
                        console[_0x551f('1bb', 'Xe(l')]($[_0x551f('1bc', 'Wkb0')] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x41fa46[_0x551f('1bd', 'F2n#')](_0x41fa46[_0x551f('1be', 'bs0$')], _0x551f('1bf', 'un%E'))) {
                            $[_0x551f('1c0', 'oRQB')](e, _0x26952b);
                        } else {
                            if (_0x6ffac3) {
                                _0x6ffac3 = JSON[_0x551f('1c1', 'nf1g')](_0x6ffac3);
                                if (_0x41fa46['bObGt'](_0x6ffac3[_0x41fa46[_0x551f('1c2', 'R*Ma')]], 0xd)) {
                                    $[_0x551f('1c3', 'P&87')] = ![];
                                    return;
                                }
                                if (_0x41fa46[_0x551f('1c4', 'Wkb0')](_0x6ffac3[_0x41fa46[_0x551f('1c5', 'Xe(l')]], 0x0)) {
                                    $['nickName'] = _0x6ffac3[_0x41fa46[_0x551f('1c6', 'E!gK')]] && _0x6ffac3[_0x41fa46[_0x551f('1c7', 'R*Ma')]][_0x551f('1c8', 'zqIg')] || $[_0x551f('32', '6)c1')];
                                } else {
                                    $['nickName'] = $['UserName'];
                                }
                            } else {
                                if (_0x41fa46[_0x551f('1c9', '2#[v')] === 'uZJHW') {
                                    console[_0x551f('1ca', 'P&87')](_0x551f('1cb', '4yT0') + _0x6ffac3[_0x551f('1cc', '(W!2')][_0x551f('1cd', 'h5PE')][_0x551f('1ce', 'Y*HT')] + _0x551f('ba', 'R*Ma') + _0x6ffac3['data'][_0x551f('93', 'zHZS')][_0x551f('1cf', 'zqIg')] + ' 元');
                                } else {
                                    console[_0x551f('1d0', '$vT7')](_0x551f('1d1', 'wGg0'));
                                }
                            }
                        }
                    }
                } catch (_0x483cf1) {
                    $[_0x551f('1c0', 'oRQB')](_0x483cf1, _0x26952b);
                } finally {
                    if (_0x41fa46[_0x551f('1d2', 'EKqs')](_0x551f('1d3', 'zHZS'), 'TisWy')) {
                        _0x41fa46[_0x551f('1d4', ')wyW')](_0x4ece29);
                    } else {
                        _0x41fa46[_0x551f('1d5', 'EKqs')](_0x4ece29, _0x6ffac3);
                    }
                }
            });
        } else {
            _0x4ece29(data);
        }
    });
}

function safeGet(_0x3ecd40) {
    var _0x2cf570 = {
        'SkkaW': function(_0x176d9f, _0xbc5789) {
            return _0x176d9f == _0xbc5789;
        },
        'jJjSY': _0x551f('1d6', 'uHno'),
        'wEiMj': function(_0x10fe61, _0x46cc2e) {
            return _0x10fe61 === _0x46cc2e;
        },
        'GIKJH': _0x551f('1d7', 'Z!Tr'),
        'NjRfY': _0x551f('1d8', 'tisG'),
        'AnvSO': function(_0x565a76, _0xbde673) {
            return _0x565a76 == _0xbde673;
        }
    };
    try {
        if (_0x2cf570[_0x551f('1d9', 'Lsem')](_0x2cf570[_0x551f('1da', '(W!2')], _0x2cf570[_0x551f('1db', 'bs0$')])) {
            try {
                if (_0x2cf570[_0x551f('1dc', 'uTl]')](typeof JSON[_0x551f('1dd', 'uTl]')](_0x3ecd40), _0x2cf570[_0x551f('1de', 'un%E')])) {
                    return !![];
                }
            } catch (_0x5d6ac3) {
                console[_0x551f('1df', ')wyW')](_0x5d6ac3);
                console[_0x551f('1e0', 'uJy8')]('京东服务器访问数据为空，请检查自身设备网络情况');
                return ![];
            }
        } else {
            if (_0x2cf570[_0x551f('1e1', 'nf1g')](typeof JSON[_0x551f('1e2', 'hT6j')](_0x3ecd40), _0x551f('1e3', ')!aO'))) {
                return !![];
            }
        }
    } catch (_0x5dacdc) {
        console[_0x551f('1e4', 'NUSN')](_0x5dacdc);
        console[_0x551f('1e5', '6)c1')](_0x551f('1e6', 'R*Ma'));
        return ![];
    }
}

function jsonParse(_0x2c119e) {
    var _0xb243b7 = {
        'aUuuW': function(_0x536a57, _0x3bdbf2) {
            return _0x536a57(_0x3bdbf2);
        },
        'klMMI': _0x551f('1e7', 'E!gK'),
        'eWUHL': function(_0xa51672, _0x1ae9cd) {
            return _0xa51672(_0x1ae9cd);
        },
        'xiKcD': _0x551f('1e8', 'bs0$'),
        'wTLtP': _0x551f('1e9', 'NUSN'),
        'QUrBK': function(_0x1fb71b, _0x195ed2) {
            return _0x1fb71b == _0x195ed2;
        },
        'GTZHV': _0x551f('1ea', 'E!gK'),
        'MyThV': function(_0xa17ce6, _0x3253b9) {
            return _0xa17ce6 === _0x3253b9;
        },
        'lUitO': _0x551f('1eb', 'h5PE'),
        'qyRmP': _0x551f('1ec', ')!aO')
    };
    if (_0xb243b7['QUrBK'](typeof _0x2c119e, _0xb243b7[_0x551f('1ed', 'gpH3')])) {
        try {
            if (_0xb243b7[_0x551f('1ee', 'wGg0')](_0x551f('1ef', 'm2qs'), _0xb243b7[_0x551f('1f0', 'aG7W')])) {
                return {
                    'url': '' + JD_API_HOST,
                    'body': 'functionId=' + functionId + _0x551f('1f1', '[i0*') + _0xb243b7[_0x551f('1f2', 'aG7W')](escape, JSON[_0x551f('13d', 'qXlN')](body)) + _0x551f('1f3', '&Ao^'),
                    'headers': {
                        'Cookie': cookie,
                        'Host': _0xb243b7['klMMI'],
                        'Connection': _0x551f('1f4', 'aG7W'),
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'User-Agent': $[_0x551f('1f5', 'Xe(l')]() ? process[_0x551f('1f6', '[i0*')][_0x551f('1f7', 'wbkX')] ? process[_0x551f('17b', '[G7V')]['JD_USER_AGENT'] : _0xb243b7[_0x551f('1f8', 'uTl]')](require, _0xb243b7[_0x551f('1f9', 'NUSN')])[_0x551f('1fa', 'F2n#')] : $['getdata'](_0x551f('1fb', 'kn5&')) ? $[_0x551f('1fc', 'zqIg')]('JDUA') : _0x551f('1fd', 'OsHR'),
                        'Accept-Language': _0xb243b7['wTLtP'],
                        'Accept-Encoding': _0x551f('1fe', '[i0*')
                    }
                };
            } else {
                return JSON[_0x551f('1ff', 'uJy8')](_0x2c119e);
            }
        } catch (_0x2fe8a0) {
            console[_0x551f('10c', '2#[v')](_0x2fe8a0);
            $[_0x551f('200', '4yT0')]($['name'], '', _0xb243b7['qyRmP']);
            return [];
        }
    }
};
_0xodz = 'jsjiami.com.v6';

// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
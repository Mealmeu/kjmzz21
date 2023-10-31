const dotenv = require("dotenv");
dotenv.config();

const fs = require('fs');
const { MessageEmbed } = require('discord.js'); // add
const { Client,Collection } = require("discord.js");
const client = (module.exports = new Client({intents:[131071]}));

client.login(process.env.TOKEN);

const prefix = "!";

client.setMaxListeners(20);

const channelIdForReviews = "1042488302227427450"; // 후기 : 1042488302227427450
const linkURL = "https://playvalorant.com/";
const reviewChannelLink = linkURL;
const gnrl = channelIdForReviews;

// 1042488302227427450
client.on('messageCreate', (message) => {
    if (!message.author.bot) {
      if (message.content === '!젠') {
        fs.readFile('acc.txt', 'utf8', (err, data) => {
          if (err) {
            console.error(`**파일 읽기 오류 : ${err}**`);
            message.reply('**File ERROR : 1**'); // 파일을 찾을 수 없음
            return;
          }
  
          const accounts = data.split('\n');
  
          if (accounts.length > 0) {
            const [id, pw] = accounts[0].split(':');
  
            if (id && pw) {
              const embed = {
                color: 0x00FF00,
                title: '[ 스카이 샵 ] ',
                description: '[젠]',
                fields: [
                  { name: 'ID', value: `**||${id}||**` },
                  { name: 'PW', value: `**||${pw}||**` },
                ],
                footer: {
                  text: '무료 이벤트를 하는 만큼 좋은 후기를 남겨주세요! :)',
                },
              };
  
              const messageContent = {
                content: '> [젠]이 도착하였습니다!',
                embeds: [embed],
              };
  
              message.author
                .send(messageContent)
                .then(() => {
                  message.reply('``[젠]``이 성공적으로 보내졌습니다!');
                  accounts.shift();
                  const newData = accounts.join('\n');
                  fs.writeFile('acc.txt', newData, (err) => {
                    if (err) {
                      console.error(`**파일 쓰기 오류 : ${err}**`);
                    }
                  });
                })
                .catch((error) => {
                  console.error(`**DM 전송 중 오류 발생 : ${error}**`);
                  message.reply('**DM을 보내는 중 오류가 발생했습니다.**');
                });
            } else {
              message.reply('**관리자에게 연락해, 젠 계정 확인을 부탁해보세요!**');
            }
          } else {
            message.reply('**계정이 없네요.. ㅠ-ㅠ**');
          }
        });
      } else if (message.channel.id === '1042488302227427450') {
        const channel = message.client.channels.cache.get('1042488302227427450');
        if (channel) {
          channel.send(message.content);
        } else {
          console.error('채널을 찾을 수 없습니다! 다시 확인해주세요!');
        }
      }
    }
  });

  client.on('messageCreate', (message) => {
    if (message.content === '!핑') {
        message.reply('퐁!');
    }
});

client.on('ready', () => {
    console.log('Skye Bot Ready!');
    const channelIdForReviews = "1042488302227427450";
    ChannelLink1 = `<#${channelIdForReviews}>`;
});

client.on('messageCreate', (message) => {
    if (message.content === '!원격끝') {
        const embed15 = {
            color: 0x00FF00,
            description: `**[ 스푸퍼 원격 종료 후 참고하세요 ] - **${ChannelLink1}`,
            fields: [
                {
                    name: "**1. 원격 종료 후 본인 계정(멜변 계정)이 아닌 랜계로 딜밴이 완벽하게 풀렸는지 확인해 주세요!**\n\n**2. 최소 3-4판 (하루 정도) 지켜보시면 좋습니다**\n\n**3. 위의 링크로 들어가서 이쁜 후기 부탁드리겠습니다! 믿고 맡겨주셔서 감사합니다!**",
                    value: "",
                },
            ],
        };
        message.reply({ embeds: [embed15] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '!명령어') {
        const embed15 = {
            color: 0x00FF00,
            description: ``,
            fields: [
                {
                    title: "[ 명령어 ]",
                    name: "[ 접두사 : ! ]\n\n**1. 명령어**\n**2. 계좌**\n**3. 웹**\n**4. 원격**\n**5. 원격끝**\n**6. 젠**\n**7. 후기**\n**8. 멜변**\n**9. 아섭**\n**10. 경매**\n**11. 링크**\n**12. 밴**\n\n==================================\n\n**==============[ Sub ]=============**\n**1. 청소**\n\n**==================================**",
                    value: "",
                },
            ],
        };
        message.reply({ embeds: [embed15] });
    }
});

anydesk = "[ 원격 주의사항 ]";
anydekslink = "https://anydesk.com/ko";
anydesk = anydekslink;

client.on('messageCreate', (message) => {
    if (message.content === '!원격') {
        const embed15 = {
            color: 0x00FF00,
            description: `**[ [ 원격 주의사항 ] ](https://anydesk.com/ko)**`,
            fields: [
                {
                    name: "**1. 계좌(1001-3720-9079케이뱅크 ㄱㅂㅌ) 5천원 입금후 맨션해주세요!**\n**2. Anydesk를 다운로드해주세요!**\n**3. Anydesk를 킨 후 '이 워크스테이션'을 복사 후 붙혀넣기 해주세요!**",
                    value: "",
                },
            ],
        };
        message.reply({ embeds: [embed15] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '!개발자') {
      const embed = {
        title: '저의 아빠는 Sh0rt B0x입니다!',
        description: '저의 아빠는 [여기](https://t.me/Sh0rtB0x)에서 만나볼 수 있어요!',
        color: 0x00ff00,
      };
  
      message.channel.send({ embeds: [embed] });
    }
  });

client.on("messageCreate", (message) => {
    const command = message.content;
    switch (command) {
        case "!계좌":
            const embed1 = {
                color: 0x00FF00,
                description: "입금자명이 맞는지 꼭 확인하고 입금해주세요.",
                fields: [
                    {
                        name: "입금자명",
                        value: "ㄱㅂㅌ",
                    },
                    {
                        name: "계좌 번호",
                        value: "케이뱅크 1001-3720-9079",
                    },
                    {
                        name: "※ 입금후 성함 올려주세요 ※",
                        value: "",
                    },
                ],
            };
            message.reply({ embeds: [embed1] });
            break;
            case "!웹":
                const channelIdForRewards = '1108666603329040414';
                const channelLink = `<#${channelIdForRewards}>`;
                const embed2 = {
                    color: 0x00FF00,
                    title: "아시아/한국/랜덤서버 보상시간안내",
                    description: "계정 보상시간은 30분입니다.",
                    fields: [
                        {
                            name: "불량인 경우",
                            value: `**${channelLink}을 참고하세요.**`,
                        },
                        {
                            name: "한섭인 경우",
                            value: "비활체커로 여유있게 기다려주시면 감사하겠습니다",
                        },
                    ],
                };
                message.reply({ embeds: [embed2] });
                break;
        case "!후기":
            const reviewChannelLink = `<#${channelIdForReviews}>`;
            const embed3 = {
                color: 0x00FF00,
                description: "구매 감사합니다. 사진/후기 (웹판기아이디)를 남기시면 100포인트씩 적립됩니다!",
                fields: [
                    {
                        name: `꼭부탁드려요🙂 ${reviewChannelLink}`,
                        value: `후기를 남겨주세요!`,
                    },
                ],
            };
            message.reply({ embeds: [embed3] });
            break;

            case "!멜변":
                const ChannelLink1 = `<#${channelIdForReviews}>`;
                const embed4 = {
                    color: 0x00FF00,
                    description: `**구매 감사합니다.**\n이메일 > 비밀번호 순으로 변경해주세요.\n ${ChannelLink1} 참고해서 변경해주세요.`,
                    fields: [
                        {
                            name: "이메일 변경 후 환불 및 교환은 어렵습니다. \n※ 본주판매 계정을 구매하신 분들은 *'판매자 정보'*를 꼭 확인해주세요 ",
                            value: "",
                        },
                    ],
                };
                message.reply({ embeds: [embed4] });
                break;
            case "!아섭":
                const embed = {
                    color: 0x00FF00,
                    description: "**구매 감사합니다.** \n\n아섭은 재판매/또는 해킹계정이므로 회수율이 조금 있습니다. \n\n**이메일변경 후 > 비번은 그대로 쓰는걸 추천드려요.** \n**이메일 변경 후 환불 및 교환은 어렵습니다.** \n\n**▼아래 비번요청 예시 참고.** \n\n**비번요청이 오는 경우 빨간링크를 눌러서 비번을 변경해주세요.** \n\n**`초반에는 메일 자주 바주시고 비번요청이 오는경우`** 비번변경 >╰멜변-구매-후-양식대로 변경해주시면 됩니다.",
                    fields: [
                        {
                            name: "\n이메일 변경 후 > 비번은 그대로 쓰는걸 추천드려요",
                            value: "",
                        },
                    ],
                };
                const imageLink = "https://cdn.discordapp.com/attachments/1055286240024477776/1167840356545613884/image.png?ex=654f9716&is=653d2216&hm=386cabfe9777427a3980a66bdae1e178fd2683d44cbfd82dcaad121445d4bd00";
                embed.image = { url: imageLink };

                message.reply({ embeds: [embed] });
            break;  
        case "!경매":
            const embed6 = {
                color: 0x00FF00,
                title: "`경매 양식`",
                fields: [
                    {
                        name: "**총 스킨 : O개**",
                        value: "",
                    },
                    {
                        name: "**주요 스킨 : **",
                        value: "",
                    },
                    {
                        name: "**현 티어(마지막 티어) : **",
                        value: "",
                    },
                    {
                        name: "**서버 : (한국/아시아)**",
                        value: "",
                    },
                    {
                        name: "**경매동의 : O, X**",
                        value: "",
                    },
                    {
                        name: "**시작 금액 : **",
                        value: "**예) 1.5부터 시작하고 싶어요 \n (터무니없이 높은 금액은 안됩니다)**",
                    },
                    {
                        name: "**카톡/번호 : **",
                        value: "(한국 계정인 경우 필수!)",
                    },
                    {
                        name: "**학생증 또는 신분증(토스계좌 정보) : **",
                        value: "(한국 계정인 경우 필수!)",
                    },
                    {
                        name: "**ㄴ동일명 계좌로 입금 받아야 합니다. 회수 방지를 위한 확인 방법이니 꼭 올려주세요. 거부하시면 본인 계정이 아닌 거로 간주하고 경매 참여가 어렵습니다.**",
                        value: "**위 정보들은 추후 회수 시 경찰서 신고 자료들로 쓰입니다**",
                    },
                    {
                        name: "**경매 신청 시 판매 금액의 20%를 받고 있습니다 : 동의/비동의**",
                        value: "",
                    },
                    {
                        name: "**다 작성하신 후 주요 스킨이 잘 보이도록 캡쳐하여 이미지를 올려주세요.**",
                        value: "",
                    },
                    {
                        name: "**1. 경매기간은 판매가격에 따라 1일~ 3일까지 진행됩니다. 도중에 언제라도 원하는 가격이 나온다면 판매자와 상의후 종료가능.**",
                        value: "",
                    },
                    {
                        name: "**2. 가격이 높게 판매되면 가장 좋겠지만, 원하는 가격이 아니더라도 도중에 경매취소는 어렵습니다. (서버밴처리, 다음경매불가)**",
                        value: "",
                    },
                    {
                        name: "**3. 경매하는동안 디코를 자주자주 봐주셔야합니다. 답변이 느린경우 다음경매에 방해가 됩니다 (판매가격이 안나온다고 악의적인잠수, 답변느림시 밴처리)**",
                        value: "",
                    },
                    {
                        name: "**4. 본인소유계정(한국판매)이 아닌 대리판매인경우 밴처리**",
                        value: "",
                    },
                    {
                        name: "**5. 전체스킨이 보이도록 캡처한장 올려주세요. 주요스킨은 '판매금액'에 도움이되니 신경써서 적어주세요 (대리로 적어드리지 않습니다)**",
                        value: "",
                    },
                    {
                        name: "**6. 시작금액을 터무니없이 올리지 마세요. (말그대로 판매되는금액이 아닌 시작하는금액입니다. 터무니 없이 올리면 경매시작하는분들이 부담이되서 경매진행이 어렵습니다.)**",
                        value: "",
                    },
                ],
            };
            message.reply({ embeds: [embed6] });
            break;
            case "!링크":
            const ChannelLink = `<#${channelIdForReviews}>`;
            const linkEmbed = {
                color: 0x00FF00,
                description: `**[링크](${linkURL})**`,
                fields: [
                    {
                        name: "**링크누르고 로그인후 > 오른쪽상단 설정 > 인증코드 보냈다고 뜨면 알려주세요**",
                        value: "",
                    },
                    {
                        name: "**계정은 확인해서 드리고 있으니 인게임 먼저 들어가시면 안됩니다 !!**",
                        value: "",
                    },
                    {
                        name: `${ChannelLink}대로 변경 후 인게임 들어가서 확인해주세요 ~`,
                        value: "",
                    },
                    {
                        name: "**(무시하시고 계정 불량 생기는 경우 책임지지 않습니다)**",
                        value: "",
                    },
                ],
            };
            message.reply({ embeds: [linkEmbed] });
            break;
case "!밴":
    const embed10 = {
        color: 0x00FF00,
        title: "**밴 해제 서비스 주의사항**",
        fields: [
            {
                name: "1. 상황에 따라 밴 해제 처리가 어려워질 수 있음을 알려드립니다.",
                value: "\u200B",
            },
            {
                name: "2. 결제 후 교환, 환불이 불가능함을 알려드립니다.",
                value: "\u200B",
            },
            {
                name: "3. 계정 명의자분 서류가 필요합니다.",
                value: "\u200B",
            },
            {
                name: "4. 계정 2차 인증을 해제해 주셔야 합니다.",
                value: "ㄴ접수 날 기준, 2주 안으로 필요서류첨부(프라이버시) 불가시 자동취소됩니다.",
            }
        ]
    }
    message.channel.send({ embeds: [embed10] });
    break;
}});

client.on("messageCreate", async (message) => {
if (message.content.startsWith("!청소 ")) {
const args = message.content.split(" ");
if (args.length === 2) {
    const range = args[1].split("~");
    if (range.length === 2) {
        const start = parseInt(range[0]);
        const end = parseInt(range[1]);

        if (!isNaN(start) && !isNaN(end)) {
            if (start >= 1 && end >= start && end <= 100) {
                const messagesToDelete = end - start + 1;
                const maxMessagesPerRequest = 100;
                let remainingMessages = messagesToDelete;

                while (remainingMessages > 0) {
                    const messagesToFetch = Math.min(remainingMessages, maxMessagesPerRequest);
                    const messages = await message.channel.messages.fetch({ limit: messagesToFetch });
                    await message.channel.bulkDelete(messages, true);
                    remainingMessages -= messagesToFetch;
                }
            } else {
                message.reply("범위가 올바르지 않습니다. 범위는 1~100까지 지정해주세요.");
            }
        } else {
            message.reply("올바른 숫자 범위를 지정해주세요.");
        }
    } else {
        message.reply("올바른 범위를 지정해주세요. 예: !청소 1~100");
    }
} else {
    message.reply("올바른 명령을 입력해주세요. 예: !청소 1~100");
}
}
});

function checkAdminPermissions(message) {
return true;
}

client.on("messageCreate", async (message) => {
if (message.author.bot) return;
const args = message.content.split(" ");
const command = args[0].toLowerCase();

if (command === `${prefix}청소`) {
if (checkAdminPermissions(message)) {
    const amountToDelete = parseInt(args[1]);
    if (isNaN(amountToDelete) || amountToDelete <= 0) {
        message.reply("올바른 수량을 입력하세요.");
        return;
    }

    if (amountToDelete > 100) {
        message.reply("최대 100개까지 삭제할 수 있습니다.");
        return;
    }

    message.channel.messages
        .fetch({ limit: amountToDelete + 1 })
        .then((messages) => {
            message.channel.bulkDelete(messages, true);
        })
        .catch((error) => {
            console.error(error);
        });
} else {
    message.reply("이 명령을 사용할 권한이 없습니다.");
}}});

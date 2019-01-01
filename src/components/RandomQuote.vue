<template>
  <div>
      <div class="quote darken">
        <transition name="component-fade" mode="out-in">
          <span :key="selectedQuote">
              {{ selectedQuote }} 
          </span>
        </transition>
        <br />
        <br />
        <transition name="component-fade" mode="out-in">
          <em :key="selectedAuthor">{{ selectedAuthor }}</em>
        </transition>
      </div>
    <div style="text-align: center;padding: 1em;">
      <button class="button" @click="randomQuote();">New quote</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      selectedQuote: "New quote every minute",
      selectedAuthor: "Random timetraveler",
      quotes: [
        {
          text:
            "Oh, I have strong opinions, but a thousand reasoned opinions are never equal to one case of diving in and finding out.",
          author: "Robert Heinlein"
        },
        {
          text:
            "To get anywhere, or even to live a long time, a man has to guess, and guess right, over and over again, without enough data for a logical answer.",
          author: "Robert Heinlein"
        },
        {
          text:
            "As a thumb rule, one can say that any time a planet starts developing cities of more than one million people, it is approaching critical mass. In a century or two it won't be fit to live on.",
          author: "Robert Heinlein"
        },
        {
          text:
            "There is no privacy in any society crowded enough to need ID's.",
          author: "Robert Heinlein"
        },
        {
          text: "There's no virtue in being old, it just takes a long time.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Age does not bring wisdom. Often it merely changes simple stupidity into arrogant conceit. Its only advantage, so far as I have been able to see, is that it spans change. A young person sees the world as a still picture, immutable. An old person has had his nose rubbed in changes and more changes and still more changes so many times that he knows it is a moving picture, forever changing. He may not like is—probably doesn't; I don't—but he knows it's so, and knowing it is the first step in coping with it.",
          author: "Robert Heinlein"
        },
        {
          text:
            "The first way to lie artistically is to tell the truth—but not all of it. The second way involves telling the truth, too, but is harder: Tell the exact truth and maybe all of it…but tell it so unconvincingly that your listener is sure you are lying.",
          author: "Robert Heinlein"
        },
        {
          text:
            "'Always cut the cards, Woodie,' he would say. 'You may lose anyhow—but not as often, nor as much. And when you do, lose, smile.'",
          author: "Robert Heinlein"
        },
        {
          text:
            "Most people won't learn even by experience, Ira. Never underestimate the power of human stupidity.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Babies and young children live in the present, the 'now.' Mature adults tend to live in the future. Only the senile live in the past.",
          author: "Robert Heinlein"
        },
        {
          text:
            "The way to live a long time—oh, a thousand years or more—is something between the way a child does it and the way a mature man does it. Give the future enough thought to be ready for it—but don't worry about it. Live each day as if you were to die next sunrise. Then face each sunrise as a fresh creation and live for it, joyously. And never think about the past. No regrets, ever.",
          author: "Robert Heinlein"
        },
        {
          text:
            "'Common sense'?' 'Son, that phrase is self-contradictory. 'Sense' is never 'common.'",
          author: "Robert Heinlein"
        },
        {
          text:
            "Never attempt to teach a pig to sing; it wastes your time and annoys the pig.",
          author: "Robert Heinlein"
        },
        {
          text:
            "‘Sleep whenever you can; you may have to stay awake a long time.’ Early rising may not be a vice, Ira, but it is certainly no virtue. The old saw about the early bird just goes to show that the worm should have stayed in bed. I can’t stand people who are smug about how early they get up.”",
          author: "Robert Heinlein"
        },
        {
          text:
            "Work? Or early rising? Neither is a virtue. But getting up early does not get more work done…any more than you can make a piece of string longer by cutting off one end and tying it onto the other. You get less work done if you persist in getting up yawning and still tired. You aren’t sharp and make mistakes and have to do it over. That sort of busy-busy is wasteful. As well as unpleasant. And annoying to those who would sleep late if their neighbors weren’t so noisily active at some ungodly cow-milking hour. Ira, progress doesn’t come from early risers—progress is made by lazy men looking for easier ways to do things.”",
          author: "Robert Heinlein"
        },
        {
          text:
            "Every impossible rule has its loopholes; every general prohibition creates its bootleggers.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Some people are ants by nature; they have to work, even when it’s useless. Few people have a talent for constructive laziness.",
          author: "Robert Heinlein"
        },
        {
          text:
            "The worst criminals in history have been loaded with good intentions.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Palaces don’t appeal to me, and being a house guest is still worse. A nuisance both to host and guest.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Danger for the sake of danger is for children who don’t really believe they can be killed. Whereas I know I can be. So there are a lot of mountains I’ll never climb. Unless I’m trapped, in which case I’ll do it—have done it!—the easiest, safest, most chicken way I can figure out. Don’t bother with anything in which the prime novelty is danger—danger is no novelty. It is simply something to be faced when you can’t run.",
          author: "Robert Heinlein"
        },
        {
          text:
            "It’s much safer to break a law knowingly than to do so through ignorance.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Schoolteacher—lost that job when they caught me teaching the kids the raw truth, a capital offense anywhere in the Galaxy.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Don’t ever become a pessimist, Ira; a pessimist is correct oftener than an optimist, but an optimist has more fun— and neither can stop the march of events.",
          author: "Robert Heinlein"
        },
        {
          text:
            "‘Put not your faith in princes,’ Ira; since they don’t produce, they always steal.",
          author: "Robert Heinlein"
        },
        {
          text:
            "A man who doesn’t know where his next meal is coming from is never bored. He may be angry or several other things—but not bored. His predicament sharpens his thoughts, spurs him into action, adds zest to his life, whether he knows it or not. Can trap him, of course; that’s why food is the usual bait for traps. But that’s the intriguing part about being broke: how to solve it without being trapped. A hungry man tends to lose his judgment—a man who has missed seven meals is often ready to kill—rarely a solution.",
          author: "Robert Heinlein"
        },
        {
          text:
            "A family man should not take risks that a bachelor finds acceptable.",
          author: "Robert Heinlein"
        },
        {
          text:
            "It is impossible to free slaves, they have to free themselves.",
          author: "Robert Heinlein"
        },
        {
          text:
            "At seventeen I was certain I was in love. But it was merely excess hormones and selfdelusion. It was most of a thousand years later before I experienced the real thing—and didn’t recognize the condition for years, as I had quit using that word.”",
          author: "Robert Heinlein"
        },
        {
          text:
            "How much is “too much”? Whatever you can’t spend before you leave a place you are not coming back to. If you hang onto that excess and come back later, you will usually find—invariably, so far as I recall—that inflation or war or taxes or changes in government or something has wiped out the alleged value of fiat money you may have kept.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Every so often some idiot tries to abolish marriage. Such attempts work as well as repealing the law of gravity, making pi equal to three point zero, or moving mountains by prayer.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Marriage is not something thought up by priests and inflicted on mankind; mar­riage is as much a part of mankind’s evolutionary equipment as his eyes, and as useful to the race as eyes are to an individual.      Surely, marriage is an economic contract to provide for children and to take care of mothers while they bear kids and bring them up—but it is much more than that. It is the means this animal, Homo sap., has evolved—quite unconsciously—for performing this indispensable function and be happy while doing so.",
          author: "Robert Heinlein"
        },
        {
          text:
            "A man never cuts his throat from a sleepless night if he has company to see him through it.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Privacy is as necessary as company; you can drive a man crazy by depriving him of either.",
          author: "Robert Heinlein"
        },
        {
          text:
            "No human can accept unlimited responsibility lest he go mad from unbearable load of unlimited guilt.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Democratic fallacy: the notion that her opinion was as good as anyone’s",
          author: "Robert Heinlein"
        },
        {
          text:
            "Aristocratic fallacy: He accepted the notion of authority in opinion.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Science and art are occupations of a very small minority—a small percentage even of those people who claim to be scientists or artists.",
          author: "Robert Heinlein"
        },
        {
          text:
            "No­body owns his genes; he’s merely their custodian. They are passed to him willy-nilly in the meiotic dance; he passes them along to others through the same blind chances.",
          author: "Robert Heinlein"
        },
        {
          text:
            "Always listen to experts. They’ll tell you what can’t be done, and why. Then do it.",
          author: "Robert Heinlein"
        },
        {
          text:
            "“Hold together, Jack, pass through everything, and everything is one dream, one appearance, one flash, one sad eye, one crystal lucid mystery, one word - Hold still, man, regain your love of life and go down from this mountain and simply be-be-be the infinite fertilities of the one mind of infinity, make no comments, complaints, criticisms, appraisals, avowals, sayings, shooting stars of thought, just flow, flow, be you all, be you what it is, it is only what it always is - Hope is a word like a snow-drift - This is the Great Knowing, this is the Awakening, this is Voidness - So shut up, live, travel, adventure, bless and dont be sorry.”",
          author: "Jack Keroauc, Desolation Angels"
        },
        {
          text:
            "“White waves upon the ocean \nWill beat a path to where I roam \nFor in my heart there is a presence \nAnd I will call that presence home”",
          author: "Darryn John Murphy"
        },
        {
          text: "Old age is always fifteen years older than I am.",
          author: "Bernard M. Baruch"
        },
        {
          text:
            "The truly independent person—in whom creative thinking is at its best—is someone who can accept society without denying himself.   ",
          author: "Richard Crutchfield"
        },
        {
          text:
            "Man and the turtle have much in common. Neither gets anywhere without sticking his neck out.",
          author: ""
        },
        {
          text:
            "The only gracious way to accept an insult is to ignore it; if you can't ignore it, top it; if you can't top it, laugh at it; if you can't laugh at it, it's probably deserved.",
          author: "Russell Lynes"
        },
        {
          text: "Frustration is not having anyone to blame but yourself.",
          author: ""
        },
        {
          text:
            "There are two statements about human beings that are true:  That all are alike, and that all are different.",
          author: "Mark Van Doren"
        },
        {
          text:
            "Try not to become a man of success but rather try to become a man of value.",
          author: "Albert Einstein"
        },
        {
          text: "Nothing is new except arrangement.",
          author: "W. Durant"
        },
        {
          text:
            "True friendship comes when silence between two people is comfortable.",
          author: "Dave Tyson Gentry"
        },
        {
          text:
            "Nothing is impossible for the man who doesn't have to do it himself.",
          author: "A. H. Weiler"
        },
        {
          text:
            "That light at the end of the tunnel just might be a train coming this way.",
          author: ""
        },
        {
          text:
            "The art of being yourself at your best is the art of unfolding your personality into the man you want to be...Be gentle with yourself, learn to love yourself, to forgive yourself, for only as we have the right attitude towards ourselves can we have the right attitude towards others.",
          author: "Wilfred Peterson"
        },
        {
          text: "The only man who can change his mind is a man that's got one.",
          author: "E. Westcott"
        },
        {
          text:
            "When I was younger, I could remember anything, whether it had happened or not.",
          author: "Mark Twain"
        },
        {
          text:
            "I have always thought respectable people scoundrels and I look anxiously at my face every morning for signs of my becoming a scoundrel.",
          author: "Bertrand Russell"
        },
        {
          text:"When action grows unprofitable, gather information; when information grows unprofitable, sleep.",
          author:"Ursula K. Le Guin, The Left Hand of Darkness"
        }
      ]
    };
  },
  methods: {
    randomQuote() {
      let quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      this.selectedQuote = quote.text;
      this.selectedAuthor = quote.author;
    }
  },
  mounted() {
    this.randomQuote();
    this.interval = setInterval(() => this.randomQuote(), 60000);
  }
};
</script>

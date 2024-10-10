import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {

  constructor(private route: ActivatedRoute, private router: Router){}

  questionId : any;
  idSubscription: any;

  questions = [
    {id:1, question: 'How do you prefer to spend your weekends?', optionA: 'Exploring new places or outdoor activities', optionB: 'Relaxing at home with a book or movie', optionC: 'Socializing with friends and family'},
    {id:2, question: 'What is your approach to solving conflicts?', optionA: 'Directly address the issue and discuss it', optionB: 'Take some time to cool off before talking', optionC: 'Avoid confrontation and hope it resolves itself'},
    {id:3, question: 'What role does your career play in your life?', optionA: 'It is my top priority and a big part of my identity', optionB: 'It is important, but I value a balanced life', optionC: 'It is just a means to an end; my personal life comes first'},
    {id:4, question: 'How do you usually handle stress?', optionA: 'I exercise or engage in physical activities', optionB: 'I talk to someone or seek support', optionC: 'I keep it to myself and try to push through'},
    {id:5, question: 'What are your views on financial planning?', optionA: 'I am meticulous about saving and budgeting', optionB: 'I have a general plan but do not stress over details', optionC: 'I tend to live in the moment and don’t worry much about it'},
    {id:6, question: 'How important is travelling to you?', optionA: 'It is a passion, I love exploring new places', optionB: 'I enjoy it occasionally but do not prioritize it', optionC: 'I prefer staying close to home and familiar surroundings'},
    {id:7, question: 'What kind of social life do you prefer?', optionA: 'I love being surrounded by people and making new friends', optionB: 'I enjoy small gatherings with close friends', optionC: 'I prefer spending time alone or with just one or two people'},
    {id:8, question: 'How do you approach decision-making?', optionA: 'I analyze all options carefully before deciding', optionB: 'I go with my gut feeling', optionC: 'I tend to ask others for their opinions before deciding'},
    {id:9, question: 'What is your preferred way to show affection?', optionA: 'Physical touch, like hugs or holding hands', optionB: 'Verbal expressions, like saying "I love you"', optionC: 'Acts of service, like doing something thoughtful for them'},
    {id:10, question: 'How do you view long-term relationships?', optionA: 'They require continuous effort and communication', optionB: 'They should feel natural and not require much effort', optionC: 'They are about shared experiences and growth together'},
    {
      id: 11,
      question: 'How do you feel about religion in your life?',
      optionA: 'Very important, it guides my decisions',
      optionB: 'Somewhat important, I respect traditions',
      optionC: 'Not important, I’m more secular'
    },
    {
      id: 12,
      question: 'What’s your stance on politics?',
      optionA: 'I’m very politically active and opinionated',
      optionB: 'I’m informed but not very involved',
      optionC: 'I’m not interested in politics'
    },
    {
      id: 13,
      question: 'How important is honesty in a relationship?',
      optionA: 'Absolutely essential, even if it’s hard',
      optionB: 'Important, but sometimes white lies are okay',
      optionC: 'Honesty is important, but not always necessary'
    },
    {
      id: 14,
      question: 'How do you view helping others?',
      optionA: 'It’s a key part of my life',
      optionB: 'I help when I can',
      optionC: 'I focus more on myself and those close to me'
    },
    {
      id: 15,
      question: 'What is your approach to environmental issues?',
      optionA: 'I’m very environmentally conscious and proactive',
      optionB: 'I try to be eco-friendly when possible',
      optionC: 'I’m not very concerned about environmental issues'
    },
    {
      id: 16,
      question: 'How important is it for you to live by a moral code?',
      optionA: 'Very important, I have a strong moral compass',
      optionB: 'I have some guiding principles, but I’m flexible',
      optionC: 'I don’t believe in rigid moral codes'
    },
    {
      id: 17,
      question: 'What’s your opinion on gender roles in a relationship?',
      optionA: 'I believe in traditional roles',
      optionB: 'I’m open to shared roles and responsibilities',
      optionC: 'I reject traditional roles and prefer a flexible approach'
    },
    {
      id: 18,
      question: 'How do you feel about live-in before marriage?',
      optionA: 'It’s essential to test compatibility',
      optionB: 'I’m open to it, but not necessary',
      optionC: 'I prefer not to live together before marriage'
    },
    {
      id: 19,
      question: 'How important is it to have a connection with your society?',
      optionA: 'Very important, I love being involved',
      optionB: 'Somewhat important, I like to know my neighbors',
      optionC: 'Not important, I prefer privacy and independence'
    },
    {
      id: 20,
      question: 'How do you view human rights issues?',
      optionA: 'They are a central concern for me',
      optionB: 'I support them, but I’m not actively involved',
      optionC: 'I’m not very engaged with these issues'
    },
    {
      id: 21,
      question: 'How do you envision your career in the next 10 years?',
      optionA: 'I aim for major career advancements',
      optionB: 'I want stability and work-life balance',
      optionC: 'I might explore different fields or focus on other aspects of life'
    },
    {
      id: 22,
      question: 'What are your thoughts on having children?',
      optionA: 'I definitely want to have children',
      optionB: 'I’m open to the idea, but not sure yet',
      optionC: 'I don’t want children'
    },
    {
      id: 23,
      question: 'How important is financial security to you?',
      optionA: 'Extremely important, I have clear financial goals',
      optionB: 'Important, but I don’t stress over it',
      optionC: 'I’m more focused on enjoying life than saving'
    },
    {
      id: 24,
      question: 'What’s your ideal living situation in the future?',
      optionA: 'Owning a home in a peaceful suburb',
      optionB: 'Living in a vibrant city with lots of opportunities',
      optionC: 'Traveling frequently or living in different places'
    },
    {
      id: 25,
      question: 'How do you prioritize work and personal life?',
      optionA: 'Work comes first, it’s my top priority',
      optionB: 'I strive for a healthy balance between the two',
      optionC: 'Personal life is more important than work'
    },
    {
      id: 26,
      question: 'How important is it to you to continuously keep learning something?',
      optionA: 'Very important, I love learning and growing',
      optionB: 'Somewhat important, I’ll learn as needed',
      optionC: 'Not very important'
    },
    {
      id: 27,
      question: 'How do you feel about retirement?',
      optionA: 'I plan to retire early and enjoy life',
      optionB: 'I’ll work until a typical retirement age',
      optionC: 'I might continue working as long as I can'
    },
    {
      id: 28,
      question: 'What are your thoughts on owning pets in the future?',
      optionA: 'I love pets and plan to have them',
      optionB: 'I’m open to it but not a priority',
      optionC: 'I’m not interested in owning pets'
    },
    {
      id: 29,
      question: 'How important is travel and adventure in your life?',
      optionA: 'Very important, I want to explore the world',
      optionB: 'I enjoy travel occasionally',
      optionC: 'Travel is not a priority for me'
    },
    {
      id: 30,
      question: 'What’s your approach to physical health and fitness?',
      optionA: 'I’m very dedicated to staying fit and healthy',
      optionB: 'I try to stay active but I’m not strict about it',
      optionC: 'I’m not very focused on fitness'
    },
    {
      id: 31,
      question: 'How do you usually express your feelings?',
      optionA: 'I’m very open and direct about my emotions',
      optionB: 'I express my feelings, but with some restraint',
      optionC: 'I tend to keep my emotions to myself'
    },
    {
      id: 32,
      question: 'What’s your social preference?',
      optionA: 'I thrive in social settings and love meeting new people',
      optionB: 'I enjoy small groups and intimate gatherings',
      optionC: 'I prefer solitude or being with a few close friends'
    },
    {
      id: 33,
      question: 'How do you handle making decisions?',
      optionA: 'I like to take charge and make decisions quickly',
      optionB: 'I weigh my options carefully before deciding',
      optionC: 'I prefer to let others take the lead in decision-making'
    },
    {
      id: 34,
      question: 'How do you approach conflicts in a relationship?',
      optionA: 'I confront issues head-on and seek resolution',
      optionB: 'I try to understand the other person’s perspective before acting',
      optionC: 'I avoid conflicts and hope they resolve on their own'
    },
    {
      id: 35,
      question: 'How do you usually handle stress?',
      optionA: 'I deal with it proactively, using stress-relief techniques',
      optionB: 'I manage stress by talking to someone or relaxing',
      optionC: 'I try to ignore it and push through'
    },
    {
      id: 36,
      question: 'How do you feel about surprises?',
      optionA: 'I love surprises and spontaneous plans',
      optionB: 'I’m okay with surprises occasionally',
      optionC: 'I prefer to plan everything and avoid surprises'
    },
    {
      id: 37,
      question: 'What’s your approach to risk-taking?',
      optionA: 'I’m a risk-taker and enjoy new challenges',
      optionB: 'I take calculated risks when necessary',
      optionC: 'I prefer to play it safe and avoid risks'
    },
    {
      id: 38,
      question: 'How do you manage your time?',
      optionA: 'I’m very organized and stick to a schedule',
      optionB: 'I’m moderately organized, with some flexibility',
      optionC: 'I’m more spontaneous and go with the flow'
    },
    {
      id: 39,
      question: 'What’s your preferred way to spend an evening?',
      optionA: 'Going out to a social event or activity',
      optionB: 'Relaxing at home with a movie or book',
      optionC: 'Working on a personal project or hobby'
    },
    {
      id: 40,
      question: 'How do you handle responsibilities?',
      optionA: 'I take them very seriously and always fulfill them',
      optionB: 'I handle them well but try not to let them stress me out',
      optionC: 'I prefer to delegate or share responsibilities'
    },
    {
      id: 41,
      question: 'What’s your ideal vacation type?',
      optionA: 'Adventure travel, exploring new places and cultures',
      optionB: 'Relaxing at a beach or resort',
      optionC: 'Staying home or visiting family'
    },
    {
      id: 42,
      question: 'How important is a healthy diet to you?',
      optionA: 'Very important, I’m strict about what I eat',
      optionB: 'Important, but I indulge occasionally',
      optionC: 'Not very important, I eat what I like'
    },
    {
      id: 43,
      question: 'How do you feel about home organization?',
      optionA: 'I’m very organized and keep everything in its place',
      optionB: 'I try to stay organized, but I’m not strict about it',
      optionC: 'I’m not very concerned with organization'
    },
    {
      id: 44,
      question: 'What’s your approach to spending money?',
      optionA: 'I’m very careful and stick to a budget',
      optionB: 'I try to save, but I also enjoy spending on what I like',
      optionC: 'I’m more of a spender and focus on enjoying life'
    },
    {
      id: 45,
      question: 'How do you feel about hosting gatherings at your home?',
      optionA: 'I love hosting and frequently invite people over',
      optionB: 'I enjoy it occasionally, but it’s not a regular thing',
      optionC: 'I prefer not to host gatherings'
    },
    {
      id: 46,
      question: 'What’s your preference for daily routines?',
      optionA: 'I prefer having a structured daily routine',
      optionB: 'I like some routine, but with flexibility',
      optionC: 'I’m more spontaneous and go with the flow'
    },
    {
      id: 47,
      question: 'How do you feel about nightlife?',
      optionA: 'I enjoy going out at night, whether it’s to bars, clubs, or events',
      optionB: 'I’m okay with going out occasionally, but not often',
      optionC: 'I prefer quiet nights at home'
    },
    {
      id: 48,
      question: 'What’s your approach to fitness and exercise?',
      optionA: 'I work out regularly and it’s a big part of my life',
      optionB: 'I exercise when I can, but I’m not strict about it',
      optionC: 'I’m not very focused on fitness'
    },
    {
      id: 49,
      question: 'How do you feel about public transportation?',
      optionA: 'I use it regularly and prefer it to driving',
      optionB: 'I use it occasionally, but I prefer to drive',
      optionC: 'I avoid public transportation whenever possible'
    },
    {
      id: 50,
      question: 'What’s your ideal weekend?',
      optionA: 'Packed with activities, socializing, and adventure',
      optionB: 'A mix of relaxation and a few planned activities',
      optionC: 'A quiet, restful time with minimal plans'
    },
    {
      id: 51,
      question: 'How important is physical affection in a relationship?',
      optionA: 'Very important, I need regular physical contact',
      optionB: 'Important, but not the most important aspect',
      optionC: 'I’m not very physically affectionate'
    },
    {
      id: 52,
      question: 'What’s your approach to giving and receiving gifts in a relationship?',
      optionA: 'I love giving and receiving gifts, it’s a key part of how I show love',
      optionB: 'I enjoy it, but it’s not the main way I express love',
      optionC: 'I’m not very focused on gift-giving'
    },
    {
      id: 53,
      question: 'How do you feel about maintaining individuality in a relationship?',
      optionA: 'Very important, we should have our own lives too',
      optionB: 'Important, but we should also share a lot together',
      optionC: 'I prefer to do almost everything together'
    },
    {
      id: 54,
      question: 'What’s your stance on sharing finances in a relationship?',
      optionA: 'I believe in completely shared finances',
      optionB: 'I prefer to keep some finances separate',
      optionC: 'I prefer to keep finances mostly separate'
    },
    {
      id: 55,
      question: 'How do you handle expressing love and affection?',
      optionA: 'I’m very expressive and affectionate',
      optionB: 'I express love through actions more than words',
      optionC: 'I’m more reserved in showing love and affection'
    },
    {
      id: 56,
      question: 'What’s your approach to resolving disagreements in a relationship?',
      optionA: 'I believe in discussing and resolving issues immediately',
      optionB: 'I prefer to give some space before discussing',
      optionC: 'I avoid confrontation and hope things smooth over'
    },
    {
      id: 57,
      question: 'How do you feel about social media in a relationship?',
      optionA: 'I’m very active on social media and like to share our life',
      optionB: 'I’m somewhat active but prefer to keep our relationship private',
      optionC: 'I’m not interested in sharing our relationship on social media'
    },
    {
      id: 58,
      question: 'What’s your approach to planning for the future together?',
      optionA: 'I believe in making detailed plans together',
      optionB: 'I think it’s important but also value flexibility',
      optionC: 'I prefer to take things as they come'
    },
    {
      id: 59,
      question: 'How do you feel about maintaining friendships outside the relationship?',
      optionA: 'Very important, I value my friendships highly',
      optionB: 'Important, but I prioritize the relationship',
      optionC: 'I prefer to focus mainly on the relationship'
    },
    {
      id: 60,
      question: 'What’s your view on spending time separately in a relationship?',
      optionA: 'It’s healthy and necessary to have some time separate',
      optionB: 'It’s okay occasionally, but I prefer to be together most of the time',
      optionC: 'I prefer to spend as much time together as possible'
    },
    {
      id: 61,
      question: 'How do you handle criticism from your partner?',
      optionA: 'I appreciate constructive criticism and use it to improve',
      optionB: 'I’m okay with it, but it can be hard to hear sometimes',
      optionC: 'I find it difficult and often get defensive'
    },
    {
      id: 62,
      question: 'What’s your approach to compromise in a relationship?',
      optionA: 'I believe in meeting halfway and finding solutions together',
      optionB: 'I’m willing to compromise but also hold my ground on key issues',
      optionC: 'I find it difficult to compromise and prefer things my way'
    },
    {
      id: 63,
      question: 'How do you handle apologies in a relationship?',
      optionA: 'I believe in apologizing sincerely when I’m wrong',
      optionB: 'I’m willing to apologize, but it can be challenging',
      optionC: 'I rarely apologize and find it difficult to admit fault'
    },
    {
      id: 64,
      question: 'What’s your approach to discussing sensitive topics like past relationships?',
      optionA: 'I believe in addressing sensitive topics openly and directly',
      optionB: 'I’m cautious and prefer to approach them carefully',
      optionC: 'I avoid discussing sensitive topics as much as possible'
    },
    {
      id: 65,
      question: 'How do you feel about asking for help in a relationship from outsiders?',
      optionA: 'I’m comfortable asking for help when needed',
      optionB: 'I prefer to handle things on my own but will ask if necessary',
      optionC: 'I rarely ask for help and prefer to be independent'
    },
    {
      id: 66,
      question: 'What’s your approach to dealing with mistakes in a relationship?',
      optionA: 'I believe in acknowledging and learning from mistakes',
      optionB: 'I try to move past mistakes quickly',
      optionC: 'I find it difficult to admit or discuss mistakes'
    },
    {
      id: 67,
      question: 'How do you feel about taking responsibility for relationship issues?',
      optionA: 'I believe in taking responsibility for my part in issues',
      optionB: 'I acknowledge my role, but also focus on my partner’s actions',
      optionC: 'I find it difficult to take responsibility and often blame others'
    },
    {
      id: 68,
      question: 'What’s your approach to setting boundaries in a relationship?',
      optionA: 'I believe in clearly defined boundaries that are respected',
      optionB: 'I’m flexible with boundaries but need some space',
      optionC: 'I prefer minimal boundaries and a more fluid relationship'
    },
    {
      id: 69,
      question: 'How do you handle relationship challenges that involve external factors (e.g., work, family)?',
      optionA: 'I believe in addressing them together as a team',
      optionB: 'I try to manage them independently but keep my partner informed',
      optionC: 'I prefer to keep external challenges separate from the relationship'
    },
    {
      id: 70,
      question: 'What’s your approach to dealing with relationship doubts or insecurities?',
      optionA: 'I believe in discussing them openly with my partner',
      optionB: 'I try to work through them on my own first',
      optionC: 'I avoid discussing them and hope they resolve on their own'
    },
    {
      id: 71,
      question: "How do you prefer to receive emotional support from your partner?",
      optionA: "Through words of encouragement and reassurance",
      optionB: "Through actions that show care and understanding",
      optionC: "Through physical affection and closeness"
    },
    {
      id: 72,
      question: "What’s your approach to expressing emotional needs in a relationship?",
      optionA: "I’m very open about my emotional needs",
      optionB: "I express them when necessary but try not to burden my partner",
      optionC: "I find it difficult to express my emotional needs"
    },
    {
      id: 73,
      question: "How do you feel about emotional vulnerability in a relationship?",
      optionA: "It’s essential and strengthens the bond",
      optionB: "It’s important, but I’m careful about how much I share",
      optionC: "I find it difficult to be emotionally vulnerable"
    },
    {
      id: 74,
      question: "What’s your approach to physical intimacy in a relationship?",
      optionA: "Very important, it’s a key part of our connection",
      optionB: "Important, but not the only way to connect",
      optionC: "I’m not very focused on physical intimacy"
    },
    {
      id: 75,
      question: "How do you handle emotional ups and downs in a relationship?",
      optionA: "I’m open about my feelings and seek support",
      optionB: "I try to manage my emotions and not let them affect the relationship",
      optionC: "I prefer to deal with my emotions privately"
    },
    {
      id: 76,
      question: "What’s your view on expressing affection in public?",
      optionA: "I’m comfortable with public displays of affection",
      optionB: "I’m okay with it occasionally, but prefer to keep it private",
      optionC: "I prefer to keep affection private"
    },
    {
      id: 77,
      question: "How do you feel about emotional independence in a relationship?",
      optionA: "It’s important to have emotional independence and self-care",
      optionB: "It’s important, but I also rely on my partner for support",
      optionC: "I prefer to be emotionally interdependent with my partner"
    },
    {
      id: 78,
      question: "What’s your approach to dealing with emotional conflicts in a relationship?",
      optionA: "I believe in talking them through calmly and finding a resolution",
      optionB: "I prefer to give it some time before discussing the conflict",
      optionC: "I avoid emotional conflicts and hope they resolve on their own"
    },
    {
      id: 79,
      question: "How do you feel about emotional expressions like crying in a relationship?",
      optionA: "It’s natural and I’m comfortable expressing emotions like crying",
      optionB: "I find it challenging but believe it’s important to express emotions",
      optionC: "I prefer to avoid such emotional expressions"
    },
    {
      id: 80,
      question: "What’s your approach to building emotional intimacy in a relationship?",
      optionA: "I believe in sharing deeply and building a strong emotional bond",
      optionB: "I build intimacy gradually, through shared experiences",
      optionC: "I focus more on practical aspects of the relationship than emotional intimacy"
    },
    {
      id: 81,
      question: "How do you feel about spending time with extended family?",
      optionA: "I enjoy spending time with extended family regularly",
      optionB: "I like occasional visits, but not too often",
      optionC: "I prefer to keep interactions with extended family minimal"
    },
    {
      id: 82,
      question: "What’s your approach to maintaining friendships while in a relationship?",
      optionA: "I believe in maintaining strong friendships outside the relationship",
      optionB: "I maintain some friendships, but focus more on the relationship",
      optionC: "I focus almost entirely on the relationship, with few outside friendships"
    },
    {
      id: 83,
      question: "How do you feel about your partner’s family and their role in your relationship?",
      optionA: "I believe in building a close relationship with my partner’s family",
      optionB: "I think it’s important, but not essential to be close with their family",
      optionC: "I prefer to keep a distance and focus on our relationship"
    },
    {
      id: 84,
      question: "What’s your view on spending holidays with family?",
      optionA: "I love spending holidays with family and look forward to it",
      optionB: "I enjoy it, but also like to have some holidays to ourselves",
      optionC: "I prefer to spend holidays just with my partner, without extended family"
    },
    {
      id: 85,
      question: "How do you feel about socializing with friends as a couple?",
      optionA: "I enjoy socializing together with friends regularly",
      optionB: "I like it occasionally, but also enjoy time alone as a couple",
      optionC: "I prefer to keep socializing to a minimum and focus on our relationship"
    },
    {
      id: 86,
      question: "What’s your approach to managing family expectations in a relationship?",
      optionA: "I believe in balancing family expectations with our own desires",
      optionB: "I try to meet family expectations, but prioritize our relationship",
      optionC: "I prefer to focus on our relationship and minimize family influence"
    },
    {
      id: 87,
      question: "How do you feel about your partner having close friends of the opposite gender?",
      optionA: "I’m comfortable with it and trust my partner completely",
      optionB: "I’m okay with it, but have some reservations",
      optionC: "I’m uncomfortable with it and prefer it to be limited"
    },
    {
      id: 88,
      question: "What’s your approach to blending different cultural or family traditions?",
      optionA: "I believe in embracing and blending traditions together",
      optionB: "I think it’s important to respect both, but not blend them too much",
      optionC: "I prefer to keep traditions separate and focus on our own"
    },
    {
      id: 89,
      question: "How do you feel about attending social events with your partner’s friends?",
      optionA: "I enjoy it and like to get to know their friends better",
      optionB: "I’m okay with it, but prefer not to go too often",
      optionC: "I prefer to avoid it and let my partner handle their social circle"
    },
    {
      id: 90,
      question: "What’s your view on sharing responsibilities for family obligations?",
      optionA: "I believe in sharing them equally and supporting each other",
      optionB: "I think it’s important, but one of us might take on more",
      optionC: "I prefer to keep family obligations minimal and focus on our relationship"
    },
    {
      id: 91,
      question: "How do you approach budgeting and managing finances?",
      optionA: "I believe in detailed budgeting and careful financial management",
      optionB: "I budget generally but don’t worry too much about details",
      optionC: "I prefer a more relaxed approach and manage finances as needed"
    },
    {
      id: 92,
      question: "What’s your view on saving versus spending?",
      optionA: "I prioritize saving for the future",
      optionB: "I believe in balancing saving and spending",
      optionC: "I prefer to focus on enjoying the present and spending as needed"
    },
    {
      id: 93,
      question: "How do you handle financial surprises or unexpected expenses?",
      optionA: "I’m prepared with savings and a plan for emergencies",
      optionB: "I try to manage them as they come, without too much stress",
      optionC: "I prefer not to worry about them and deal with them when necessary"
    },
    {
      id: 94,
      question: "What’s your approach to sharing financial responsibilities in a relationship?",
      optionA: "I believe in equal sharing of financial responsibilities",
      optionB: "I’m okay with unequal sharing, depending on circumstances",
      optionC: "I prefer to keep finances mostly separate and handle my own"
    },
    {
      id: 95,
      question: "How do you feel about financial independence in a relationship?",
      optionA: "It’s important to maintain some financial independence",
      optionB: "It’s okay, but I prefer to share most financial aspects",
      optionC: "I’m comfortable with complete financial interdependence"
    },
    {
      id: 96,
      question: "What’s your approach to making big financial decisions together?",
      optionA: "I believe in discussing and deciding together on major expenses",
      optionB: "I think it’s important, but one of us might take the lead",
      optionC: "I prefer to make most big decisions independently"
    },
    {
      id: 97,
      question: "How do you feel about debt in a relationship?",
      optionA: "I believe in managing and paying off debt as a priority",
      optionB: "I think it’s important, but I’m okay with some manageable debt",
      optionC: "I’m not very concerned about debt and focus on other priorities"
    },
    {
      id: 98,
      question: "What’s your approach to planning for long-term financial goals?",
      optionA: "I believe in setting clear financial goals together",
      optionB: "I think it’s important, but I’m flexible about goals",
      optionC: "I prefer to focus on short-term needs and enjoy the present"
    },
    {
      id: 99,
      question: "How do you feel about spending on luxuries versus necessities?",
      optionA: "I prioritize necessities and limit spending on luxuries",
      optionB: "I balance spending on both, depending on circumstances",
      optionC: "I enjoy spending on luxuries and prioritize enjoying life"
    },
    {
      id: 100,
      question: "What’s your approach to financial transparency in a relationship?",
      optionA: "I believe in complete financial transparency between partners",
      optionB: "I think it’s important, but some aspects can remain private",
      optionC: "I prefer to keep finances mostly private and separate"
    },
    {
      id: 101,
      question: "How do you approach setting and achieving life goals?",
      optionA: "I set clear goals and work diligently to achieve them",
      optionB: "I set goals but remain flexible and adapt as needed",
      optionC: "I prefer to live in the moment and not focus too much on goals"
    },
    {
      id: 102,
      question: "What’s your view on balancing career and personal life?",
      optionA: "I believe in a strong balance between career and personal life",
      optionB: "I prioritize my career but also make time for personal life",
      optionC: "I focus primarily on my career and personal life comes second"
    },
    {
      id: 103,
      question: "How do you handle setbacks or failures in life?",
      optionA: "I see them as learning experiences and bounce back quickly",
      optionB: "I take them seriously but eventually move on",
      optionC: "I find them difficult to handle and struggle to recover"
    },
    {
      id: 104,
      question: "What’s your approach to lifelong learning and personal development?",
      optionA: "I’m committed to continuous learning and self-improvement",
      optionB: "I value learning but take it at my own pace",
      optionC: "I focus more on practical experiences than formal learning"
    },
    {
      id: 105,
      question: "How do you feel about work-life balance?",
      optionA: "It’s essential to maintain a healthy work-life balance",
      optionB: "It’s important, but I sometimes prioritize work",
      optionC: "I focus mainly on work and personal life is secondary"
    },
    {
      id: 106,
      question: "What’s your view on achieving career success?",
      optionA: "I’m very ambitious and career success is a top priority",
      optionB: "I value career success but also prioritize other aspects of life",
      optionC: "I’m not very focused on career success and prioritize other areas"
    },
    {
      id: 107,
      question: "How do you handle change and uncertainty in life?",
      optionA: "I adapt quickly and see change as an opportunity",
      optionB: "I manage it, but it takes time to adjust",
      optionC: "I find change challenging and prefer stability"
    },
    {
      id: 108,
      question: "What’s your approach to balancing short-term and long-term goals?",
      optionA: "I focus on long-term goals and plan accordingly",
      optionB: "I balance both, depending on what’s most important at the time",
      optionC: "I focus more on short-term goals and immediate needs"
    },
    {
      id: 109,
      question: "How do you feel about taking risks in life?",
      optionA: "I’m comfortable taking calculated risks for potential rewards",
      optionB: "I’m cautious and weigh risks carefully before deciding",
      optionC: "I prefer to avoid risks and stick to safer options"
    },
    {
      id: 110,
      question: "What’s your view on achieving personal fulfillment?",
      optionA: "I actively pursue activities that bring me personal fulfillment",
      optionB: "I value it, but don’t always prioritize it in my daily life",
      optionC: "I focus more on practical concerns than personal fulfillment"
    },
  ]

  ngOnInit(){
    this.idSubscription = this.route.paramMap.subscribe(params => {
      this.questionId = params.get('id');
    })

    // if(this.route.snapshot.paramMap.get('id')){
    //   this.questionId = this.route.snapshot.paramMap.get('id');
    //   console.log(this.questionId);
    // }
  }

  goToQuestion(id: number){
    this.router.navigate(['evaluation', id]);
    this.ngOnInit();
  }

  ngOnDestroy(){
    this.idSubscription.unsubscribe();
  }

}

import React from 'react';
import './App.css';
import logo from './assets/images/logo.ico'

class Text extends React.Component{
    constructor(props){
        super(props);
        this.state={
            texts:[
            "A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.\r\nWhere is the party in opposition that has not been decried as communistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?\r\nTwo things result from this fact:\r\nI. Communism is already acknowledged by all European powers to be itself a power.\r\nII. It is high time that Communists should openly, in the face of the whole world, publish their views, their aims, their tendencies, and meet this nursery tale of the Spectre of Communism with a manifesto of the party itself.\r\nTo this end, Communists of various nationalities have assembled in London and sketched the following manifesto, to be published in the English, French, German, Italian, Flemish and Danish languages.",
            "DMOJ contests really need to stop being made by Olympiad students. It's just people who learn the same algorithm and put that on the contest. People like these are the ones with the inflated ratings who just use what they learned from Olympiads. This site has been ruined by these people and is no longer the site it was before. No shame to bruce (he's a really good teacher), but competitive programming used to be so selective to the people who were good and had a will to learn and get good at something but now it has just become a bunch of kids who want to get into cco because iT lOoKs GoOd oN [mY] rEsUmE.\r\ntbh no one will really care and people like xiaowuc1 have no life, will never amount to anything, and won't find a good job all because he spends 90% of his time talking to highschool students (cus he has no friends)\r\n(FYI wleung_bvg makes good contests)\r\nP.S. Excuse me for my poor use of words.",
            ],
            codes:[
            "struct BITree{\r\n    int bit[N];\r\n    build(int arr[]){\r\n        fori(1,N){\r\n            bit[i]+=arr[i-1];\r\n            bit[i+(i&(-i))]+=bit[i];\r\n        }\r\n    }\r\n    void upd(int x,int v){\r\n        for(;x<N;x+=x&-x) bit[x]+=v;\r\n    }\r\n    int query(int x){\r\n        int ret=0;\r\n        for(;x;x-=x&-x) ret+=bit[x];\r\n        return ret;\r\n    }\r\n    int query(int l,int r){\r\n        return query(r)-query(l-1);\r\n    }\r\n};",
            ],
            words: ["the", "name", "of", "very", "to", "through", "and", "just", "form", "in", "much", "is", "great", "it", "think", "you", "say", "that", "help", "he", "low", "was", "line", "for", "before", "on", "turn", "are", "cause", "with", "same", "as", "mean", "differ", "his", "move", "they", "right", "be", "boy", "at", "old", "one", "too", "have", "does", "this", "tell", "from", "sentence", "or", "set", "had", "three", "by", "want", "hot", "air", "but", "well", "some", "also", "what", "play", "there", "small", "we", "end", "can", "put", "out", "home", "other", "read", "were", "hand", "all", "port", "your", "large", "when", "spell", "up", "add", "use", "even", "word", "land", "how", "here", "said", "must", "an", "big", "each", "high", "she", "such", "which", "follow", "do", "act", "their", "why", "time", "ask", "if", "men", "will", "change", "way", "went", "about", "light", "many", "kind", "then", "off", "them", "need", "would", "house", "write", "picture", "like", "try", "so", "us", "these", "again", "her", "animal", "long", "point", "make", "mother", "thing", "world", "see", "near", "him", "build", "two", "self", "has", "earth", "look", "father", "more", "head", "day", "stand", "could", "own", "go", "page", "come", "should", "did", "country", "my", "found", "sound", "answer", "no", "school", "most", "grow", "number", "study", "who", "still", "over", "learn", "know", "plant", "water", "cover", "than", "food", "call", "sun", "first", "four", "people", "thought", "may", "let", "down", "keep", "side", "eye", "been", "never", "now", "last", "find", "door", "any", "between", "new", "city", "work", "tree", "part", "cross", "take", "since", "get", "hard", "place", "start", "made", "might", "live", "story", "where", "saw", "after", "far", "back", "sea", "little", "draw", "only", "left", "round", "late", "man", "run", "year", "not", "came", "while", "show", "press", "every", "close", "good", "night", "me", "real", "give", "life", "our", "few", "under", "stop", "open", "ten", "seem", "simple", "together", "several", "next", "vowel", "white", "toward", "children", "war", "begin", "lay", "got", "against", "walk", "pattern", "example", "slow", "ease", "paper", "love", "often", "person", "always", "money", "music", "serve", "those", "appear", "both", "road", "mark", "map", "book", "science", "letter", "rule", "until", "govern", "mile", "pull", "river", "cold", "car", "notice", "feet", "voice", "care", "fall", "second", "power", "group", "town", "carry", "fine", "took", "certain", "rain", "fly", "eat", "unit", "room", "lead", "friend", "cry", "began", "dark", "idea", "machine", "fish", "note", "mountain", "wait", "north", "plan", "once", "figure", "base", "star", "hear", "box", "horse", "noun", "cut", "field", "sure", "rest", "watch", "correct", "able", "face", "pound", "wood", "done", "main", "beauty", "enough", "drive", "plain", "stood", "girl", "contain", "usual", "front", "young", "teach", "ready", "week", "above", "final", "ever", "gave", "red", "green", "list", "oh", "though", "quick", "feel", "develop", "talk", "sleep", "bird", "warm", "soon", "free", "body", "minute", "dog", "strong", "family", "special", "direct", "mind", "pose", "behind", "leave", "clear", "song", "tail", "measure", "produce", "state", "fact", "product", "street", "black", "inch", "short", "lot", "numeral", "nothing", "class", "course", "wind", "stay", "question", "wheel", "happen", "full", "complete", "force", "ship", "blue", "area", "object", "half", "decide", "rock", "surface", "order", "deep", "fire", "moon", "south", "island", "problem", "foot", "piece", "yet", "told", "busy", "knew", "test", "pass", "record", "farm", "boat", "top", "common", "whole", "gold", "king", "possible", "size", "plane", "heard", "age", "best", "dry", "hour", "wonder", "better", "laugh", "true", "thousand", "during", "ago", "hundred", "ran", "am", "check", "remember", "game", "step", "shape", "early", "yes", "hold", "hot", "west", "miss", "ground", "brought", "interest", "heat", "reach", "snow", "fast", "bed", "five", "bring", "sing", "sit", "listen", "perhaps", "six", "fill", "table", "east", "travel", "weight", "less", "language", "morning", "among", "speed", "typing", "mineral", "seven", "eight", "nine", "everything", "something", "standard", "distant", "paint"],
            text: "",
            userText: "",
            startTime: -1,
            done: 0,
        }
    }
    componentDidMount(){
        this.reset("random");
    }
    start(event){
        this.setState({userText:event.target.value});
        if(this.state.startTime==-1) this.setState({startTime:Date.now()});
        else if(this.state.startTime+60000<Date.now()) this.end();
    }
    end(){
        this.setState({done:1});
    }
    reset(type){
        if(type=="random"){
            var s="";
            for(let i=0;i<300;i++) s=s+this.state.words[Math.floor(Math.random()*this.state.words.length)]+" ";
            this.setState({text:s});
        }
        if(type=="text"){
            this.setState({text:this.state.texts[Math.floor(Math.random()*this.state.texts.length)]});
        }
        if(type=="code"){
            this.setState({text:this.state.codes[Math.floor(Math.random()*this.state.codes.length)]});
        }
        this.setState({userText:"",startTime:-1,done:0});
    }
    setText(event){
        this.setState({text:event.target.value});
    }
    render(){
        if(this.state.done){
            var s='.'+this.state.text,t='.'+this.state.userText,dp=Array(s.length).fill().map(()=>Array(t.length).fill(-1)),pre=Array(s.length).fill().map(()=>Array(t.length)),userOut=[],textOut=[],cpm=0;
            dp[0][0]=0;
            for(let i=0;i<s.length;i++) for(let j=0;j<t.length;j++){
                if(i>0){
                    dp[i][j]=dp[i-1][j]; pre[i][j]=2;
                }
                if(j>0&&dp[i][j]<dp[i][j-1]){
                    dp[i][j]=dp[i][j-1]; pre[i][j]=1;
                }
                if(i>0&&j>0&&s[i]==t[j]&&dp[i][j]<dp[i-1][j-1]+1){
                    dp[i][j]=dp[i-1][j-1]+1; pre[i][j]=0;
                }
            }
            for(let i=s.length-1,j=t.length-1,p=0;i>0||j>0;){
                p=pre[i][j];
                if(p==0){
                    textOut.push(<span className="highlight">{s[i]}</span>);
                    userOut.push(<span className="highlight">{t[j]}</span>);
                    i--; j--; cpm++;
                }
                else if(p==1){
                    userOut.push(<span>{t[j]}</span>);
                    j--;
                }
                else{
                    textOut.push(<span>{s[i]}</span>);
                    i--;
                }
            }
            textOut=textOut.reverse(); userOut=userOut.reverse();
            return(
                <div className="main">
                    <p>Correct characters typed: {cpm} ({cpm/5} words)</p>
                    <p>Total characters typed: {t.length-1} ({(t.length-1)/5} words)</p>
                    <p>Accuracy: {Math.round(10000*cpm/(t.length-1))/100}%</p>
                    <hr/>
                    <div className="column">
                        <h2>Reference</h2>
                        {textOut}
                    </div>
                    <div className="column">
                        <h2>Your text</h2>
                        {userOut}
                    </div>
                    <hr/>
                    <button onClick={()=> this.reset()}>Reset</button>
                    <button onClick={()=> this.reset("random")}>Random Words</button>
                    <button onClick={()=> this.reset("text")}>Text</button>
                    <button onClick={()=> this.reset("code")}>Code</button>
                    <label>
                        <button onClick={()=> this.reset()}>Custom</button>
                        <textarea className="customtext" value={this.state.text} onChange={(event) => this.setText(event)}/>
                    </label>
                </div>
            );
        }
        else return(
            <div>
                <p>Instructions: type the text provided into the box below. Try to type as much as you can in one minute, or click the `Done` button if you finish early.</p>
                <hr/>
                <p>{this.state.text}</p>
                <hr/>
                <button onClick={()=> this.reset()}>Reset</button>
                <button onClick={()=> this.reset("random")}>Random Words</button>
                <button onClick={()=> this.reset("text")}>Text</button>
                <button onClick={()=> this.reset("code")}>Code</button>
                <label>
                    <button onClick={()=> this.reset()}>Custom</button>
                    <textarea className="customtext" value={this.state.text} onChange={(event) => this.setText(event)}/>
                </label>
                <textarea className="input" value={this.state.userText} onChange={(event) => this.start(event)}/>
                <button onClick={()=>this.end()}>Done</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return (
          <div>
            <header>
              <h1><a href="index.html">Speedforces</a></h1>
              <a href="https://aaerialys.me"><img src={logo} alt="logo" /></a>
            </header>
            <div className="main">
                <Text/>
            </div>
            <footer>
              <div className="bottom">
                <p>2020 | <a href="https://aaerialys.me">Aaerialys</a></p>
              </div>
            </footer>
          </div>
        );
    }
}

export default App;



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
            "Its great to be American. After being awoken today by the sound of gunshots, I army crawled into the kitchen to make breakfast like I always do. I turned on the news (only sound now because of all the bullet holes in the screen) and the weatherman said to expect 3-5 inches of lead today. Great, that's less than usual. I grabbed a fresh gun out of the cabinet and began to eat my cereal with the spoon attachment that the lax laws in the US allow me to have, but first, I notice my neighbor is outside! We exchange pleasantries and fire. I can hear a heavy machine gun rattling off a few houses down. \"Sounds like Jim's got the .50 Cal out.\" I say.\r\n\r\n\"Yep\", replies my neighbor, \"he always trims the hedges on Friday. God bless him and America\" we give each other parting shots as we dive into the trenches that lead back into our bullet-riddled home. Out in front I can hear a cop killing someone's dog. Which is strange because usually by this time of day theyve already shot everyone's dogs. Ah well, I just hope today isn't another \"designated workplace shooting day\" at work. I need to go to Walmart and pick up some more ammo.\r\n",
            ],
            codes:[
            "struct BITree{\r\n    int bit[N];\r\n    build(int arr[]){\r\n        fori(1,N){\r\n            bit[i]+=arr[i-1];\r\n            bit[i+(i&(-i))]+=bit[i];\r\n        }\r\n    }\r\n    void upd(int x,int v){\r\n        for(;x<N;x+=x&-x) bit[x]+=v;\r\n    }\r\n    int query(int x){\r\n        int ret=0;\r\n        for(;x;x-=x&-x) ret+=bit[x];\r\n        return ret;\r\n    }\r\n    int query(int l,int r){\r\n        return query(r)-query(l-1);\r\n    }\r\n};",
            "const int N=1000;\r\nstruct DSU{\r\n    int p[N];\r\n    DSU(){fill(all(p),-1);}\r\n    int head(int x){return p[x]<0? x: p[x]=head(p[x]);}\r\n    bool link(int x,int y){\r\n        x=head(x); y=head(y);\r\n        if(x==y) return 0;\r\n        if(p[x]>p[y]) swap(x,y);\r\n        p[x]+=p[y]; p[y]=x;\r\n        return 1;\r\n    }\r\n};\r\n",
            "const int N=P2(10),M=1e9+7; //N=power of 2\r\nstruct node{\r\n    int v;\r\n};\r\nclass segTree{ // 0 indexed\r\npublic:\r\n    node seg[2*N];\r\n    node merge(node l,node r){\r\n        node ret; ret.v=l.v+r.v;\r\n        return ret;\r\n    }\r\n    void pull(int num){\r\n        seg[num]=merge(seg[num*2],seg[num*2+1]);\r\n    }\r\n    void build(int *arr){\r\n        fori(0,N) seg[i+N].v=arr[i];\r\n        ford(i,N-1,1) pull(i);\r\n    }\r\n    void upd(int pos,int val){\r\n        seg[pos+=N].v=val;\r\n        for(pos/=2;pos;pos/=2) pull(pos);\r\n    }\r\n    int query(int l,int r){\r\n        node ret1,ret2; ret1.v=ret2.v=0;\r\n        for(l+=N,r+=N+1;l<r;l/=2,r/=2){\r\n            if(l&1) ret1=merge(ret1,seg[l++]);\r\n            if(r&1) ret2=merge(seg[--r],ret2);\r\n        }\r\n        return merge(ret1,ret2).v;\r\n    }\r\n};\r\nsegTree st;\r\n",
            "const int N=100010,M=1e9+7;\r\n\r\ntypedef struct node* sp; //sp=splay tree\r\nstruct lazy{\r\n    int a,b;\r\n    operator bool() const{return !a||b;}\r\n};\r\nlazy operator+=(lazy& a,lazy& b){\r\n    a.a=a.a*b.a; a.b=a.b*b.a+b.b;\r\n    return a;\r\n}\r\nstruct Info{\r\n    int sz,sum,mi,ma;\r\n    Info(int v){\r\n        sz=1; sum=mi=ma=v;\r\n    }\r\n    Info(){\r\n        sz=sum=0; mi=inf; ma=-inf;\r\n    }\r\n};\r\nInfo& operator+=(Info& a,Info& b){\r\n    a.sz+=b.sz; a.sum+=b.sum; a.mi=min(a.mi,b.mi); a.ma=max(a.ma,b.ma);\r\n    return a;\r\n}\r\nInfo operator+=(Info& a,lazy& b){\r\n    if(!a.sz) return a;\r\n    a.sum=a.sum*b.a+a.sz*b.b; a.mi=a.mi*b.a+b.b; a.ma=a.ma*b.a+b.b;\r\n    return a;\r\n}\r\nint operator +=(int& a,lazy& b){\r\n    a=a*b.a+b.b;\r\n    return a;\r\n}\r\nstruct node{\r\n    int id,val;\r\n    sp p,c[5];\r\n    bool flip;\r\n    Info info[2];\r\n    lazy lz[2];\r\n    node(int i, int v){\r\n        id=i; val=v;\r\n        lz[0]=lz[1]={1,0}; info[0]=Info(val);\r\n        p=nullptr; fori(0,5) c[i]=nullptr;\r\n        flip=0;\r\n    }\r\n    void upd(lazy l){\r\n        lz[0]+=l; info[0]+=l; val+=l;\r\n    }\r\n    void upd2(lazy l){\r\n        lz[1]+=l; info[1]+=l;\r\n    }\r\n    void push(){\r\n        if(flip){\r\n            swap(c[0],c[1]);\r\n            fori(0,2) if(c[i]) c[i]->flip^=1;\r\n            flip=0;\r\n        }\r\n        if(lz[1]){\r\n            fori(0,5) if(c[i]){\r\n                c[i]->upd2(lz[1]);\r\n                if(i>=2) c[i]->upd(lz[1]);\r\n            }\r\n            lz[1]={1,0};\r\n        }\r\n        if(lz[0]){\r\n            fori(0,2) if(c[i]) c[i]->upd(lz[0]);\r\n            lz[0]={1,0};\r\n        }\r\n    }\r\n    void pull(){\r\n        info[0]=Info(val); info[1]=Info();\r\n        fori(0,5) if(c[i]){\r\n            info[1]+=c[i]->info[1];\r\n            info[i>=2]+=c[i]->info[0];\r\n        }\r\n    }\r\n    int dir(){\r\n        if(!p) return 5;\r\n        fori(0,5) if(p->c[i]==this) return i;\r\n    }\r\n    friend void connect(sp x,sp y,int d){\r\n        if(y) y->p=x;\r\n        if(d<5) x->c[d]=y;\r\n    }\r\n    void rot(){\r\n        int d = dir(); sp x=p;\r\n        connect(x->p,this,x->dir()); connect(x,c[d^1],d); connect(this,x,d^1);\r\n        x->pull(); pull();\r\n    }\r\n};\r\nvoid splay(sp x){\r\n    if(!x) return;\r\n    sp y;\r\n    while(x->dir()<2&&x->p->dir()<2&&x->p->p->dir()<2){\r\n        y=x->p; y->p->push(); y->push(); x->push();\r\n        x->dir()==y->dir()? y->rot(): x->rot();\r\n        x->rot();\r\n    }\r\n    if(x->dir()<2&&x->p->dir()<2) x->p->push(), x->push(), x->rot();\r\n    if(x->dir()<2) {\r\n        x->p->push(), x->push();\r\n        fori(2,4) if(x->p->c[i]) connect(x,x->p->c[i],i), x->p->c[i]=nullptr;\r\n        x->rot();\r\n    }\r\n    while(x->dir()<4){\r\n        y=x->p; if(y->p) y->p->push(); y->push(); x->push();\r\n        if(y->dir()<4) x->dir()==y->dir()? y->rot(): x->rot();\r\n        x->rot();\r\n    }\r\n    x->push();\r\n}\r\nsp splayRight(sp x){\r\n    while(x->c[3]) x=x->c[3];\r\n    splay(x); return x;\r\n}\r\nsp join(sp a,sp b){\r\n    if(!a) return b;\r\n    splay(a); a=splayRight(a);\r\n    connect(a,b,3); a->pull(); return a;\r\n}\r\nvoid access(sp x){\r\n    for(sp v=x,last=nullptr;v;v=v->p){\r\n        splay(v); auto c=v->c[1];\r\n        if(c) c->p=nullptr;\r\n        if(last){\r\n            last->push();\r\n            auto a=last->c[2],b=last->c[3];\r\n            if(a) a->p=nullptr;\r\n            if(b) b->p=nullptr;\r\n            last->c[2]=last->c[3]=nullptr; //last->pull();\r\n            connect(v,join(join(a,b),c),4);\r\n        }\r\n        else{\r\n            if(v->c[4]) v->c[4]->p=nullptr;\r\n            connect(v,join(c,v->c[4]),4);\r\n        }\r\n        v->c[1]=last; v->pull(); last=v;\r\n    }\r\n    splay(x);\r\n}\r\nvoid evert(sp x){\r\n    access(x);\r\n    x->flip^=1;\r\n}\r\nsp lca(sp x,sp y){\r\n    if(x==y) return x;\r\n    access(x); access(y);\r\n    if(!x->p) return nullptr;\r\n    splay(x); return x->p?:x;\r\n}\r\nvoid link(sp x,sp y){\r\n    if(lca(x,y)) return; //!need to access y!!\r\n    evert(x); connect(y,join(x,y->c[4]),4);// y->pull();\r\n}\r\nvoid cut(sp x){\r\n    access(x);\r\n    x->c[0]->p=nullptr; x->c[0]=nullptr; //x->pull();\r\n}\r\nsp lct[N];\r\n",
            "const int N=500001,M=1e9+7;\r\ntypedef struct node* tr; //tr=treap\r\nstruct node{\r\n    int v,p; tr c[2];\r\n    int sz,s,lz;\r\n    bool flip;\r\n    node(int val){\r\n        v=s=val; p=randint(0,1e9);\r\n        c[0]=c[1]=nullptr; sz=1; lz=inf; flip=false;\r\n    }\r\n    void upd(int val){\r\n        v=lz=val; s=val*sz;\r\n    }\r\n    friend int Sz(tr x){return x?x->sz:0;}\r\n    friend int S(tr x){return x?x->s:0;}\r\n    void push(){\r\n        if(flip){\r\n            swap(c[0],c[1]);\r\n            flip=0;\r\n            fori(0,2) c[i]->flip^=1;\r\n        }\r\n        if(lz!=inf){\r\n            fori(0,2) if(c[i]) c[i]->upd(lz);\r\n            lz=inf;\r\n        }\r\n    }\r\n    void pull(){\r\n        sz=1+Sz(c[0])+Sz(c[1]);\r\n        s=v+S(c[0])+S(c[1]);\r\n    }\r\n    friend tr push(tr x){if(x) x->push(); return x;}\r\n    friend tr pull(tr x){if(x) x->pull(); return x;}\r\n};\r\npair<tr,tr> split(tr cur,int v){ //nodes >=v to right\r\n    if(!cur) return{cur,cur};\r\n    push(cur);\r\n    if(cur->v>=v){\r\n        auto temp=split(cur->c[0],v); cur->c[0]=temp.ps;\r\n        return {temp.pf,pull(cur)};\r\n    }\r\n    auto temp=split(cur->c[1],v); cur->c[1]=temp.pf;\r\n    return {pull(cur),temp.ps};\r\n}\r\npair<tr,tr> isplit(tr cur,int ind){ //first ind nodes go left\r\n    if(!cur) return{cur,cur};\r\n    push(cur);\r\n    if(Sz(cur->c[0])>=ind){\r\n        auto temp=isplit(cur->c[0],ind); cur->c[0]=temp.ps;\r\n        return {temp.pf,pull(cur)};\r\n    }\r\n    else{\r\n        auto temp=isplit(cur->c[1],ind-Sz(cur->c[0])-1); cur->c[1]=temp.pf;\r\n        return {pull(cur),temp.ps};\r\n    }\r\n}\r\ntr merge(tr l,tr r){\r\n    if(!l||!r) return (l?pull(l):pull(r));\r\n    push(l); push(r);\r\n    if(l->p>r->p){\r\n        l->c[1]=merge(l->c[1],r);\r\n        return pull(l);\r\n    }\r\n    r->c[0]=merge(l,r->c[0]);\r\n    return pull(r);\r\n}\r\ntr ins(tr cur,int v){\r\n    auto a=split(cur,v),b=split(a.ps,v+1);\r\n    return merge(a.pf,merge(new node(v),b.ps));\r\n}\r\ntr del(tr cur,int v){\r\n    auto a=split(cur,v),b=split(a.ps,v+1);\r\n    return merge(a.pf,b.ps);\r\n}\r\nvoid del(tr cur){\r\n    if(!cur) return;\r\n    fori(0,2) del(cur->c[i]);\r\n    delete cur;\r\n}\r\nvoid tour(tr cur){\r\n    if(!cur) return;\r\n    push(cur); tour(cur->c[0]); tour(cur->c[1]); cout<<cur->v<<\" \";\r\n}\r\n",
            "const int N=P2(18),M=1e9+7;\r\nint n,m,a,b,c,sz[N],tot,ans;\r\nvector<int> gr[N];\r\nbool done[N];\r\n\r\nint szdfs(int v,int p){\r\n    sz[v]=1;\r\n    for(auto i:gr[v]) if(i!=p&&!done[i]) sz[v]+=szdfs(i,v);\r\n    return sz[v];\r\n}\r\nint getcentroid(int v,int p){\r\n    for(auto i:gr[v]) if(i!=p&&!done[i]&&sz[i]*2>tot) return getcentroid(i,v);\r\n    return v;\r\n}\r\nvoid dfs(int v,int p){ // for each centroid\r\n    for(auto i:gr[v]) if(i!=p&&!done[i]){\r\n        dfs(i,v);\r\n    }\r\n}\r\nvoid go(int v){ // for each centroid\r\n    tot=szdfs(v,-1); v=getcentroid(v,-1); done[v]=1;\r\n    for(auto i:gr[v]) if(!done[i]){\r\n        dfs(i,v);\r\n    }\r\n    for(auto i:gr[v]) if(!done[i]) go(i);\r\n}\r\n",
            ],
            words: ["the", "name", "of", "very", "to", "through", "and", "just", "form", "in", "much", "is", "great", "it", "think", "you", "say", "that", "help", "he", "low", "was", "line", "for", "before", "on", "turn", "are", "cause", "with", "same", "as", "mean", "differ", "his", "move", "they", "right", "be", "boy", "at", "old", "one", "too", "have", "does", "this", "tell", "from", "sentence", "or", "set", "had", "three", "by", "want", "hot", "air", "but", "well", "some", "also", "what", "play", "there", "small", "we", "end", "can", "put", "out", "home", "other", "read", "were", "hand", "all", "port", "your", "large", "when", "spell", "up", "add", "use", "even", "word", "land", "how", "here", "said", "must", "an", "big", "each", "high", "she", "such", "which", "follow", "do", "act", "their", "why", "time", "ask", "if", "men", "will", "change", "way", "went", "about", "light", "many", "kind", "then", "off", "them", "need", "would", "house", "write", "picture", "like", "try", "so", "us", "these", "again", "her", "animal", "long", "point", "make", "mother", "thing", "world", "see", "near", "him", "build", "two", "self", "has", "earth", "look", "father", "more", "head", "day", "stand", "could", "own", "go", "page", "come", "should", "did", "country", "my", "found", "sound", "answer", "no", "school", "most", "grow", "number", "study", "who", "still", "over", "learn", "know", "plant", "water", "cover", "than", "food", "call", "sun", "first", "four", "people", "thought", "may", "let", "down", "keep", "side", "eye", "been", "never", "now", "last", "find", "door", "any", "between", "new", "city", "work", "tree", "part", "cross", "take", "since", "get", "hard", "place", "start", "made", "might", "live", "story", "where", "saw", "after", "far", "back", "sea", "little", "draw", "only", "left", "round", "late", "man", "run", "year", "not", "came", "while", "show", "press", "every", "close", "good", "night", "me", "real", "give", "life", "our", "few", "under", "stop", "open", "ten", "seem", "simple", "together", "several", "next", "vowel", "white", "toward", "children", "war", "begin", "lay", "got", "against", "walk", "pattern", "example", "slow", "ease", "paper", "love", "often", "person", "always", "money", "music", "serve", "those", "appear", "both", "road", "mark", "map", "book", "science", "letter", "rule", "until", "govern", "mile", "pull", "river", "cold", "car", "notice", "feet", "voice", "care", "fall", "second", "power", "group", "town", "carry", "fine", "took", "certain", "rain", "fly", "eat", "unit", "room", "lead", "friend", "cry", "began", "dark", "idea", "machine", "fish", "note", "mountain", "wait", "north", "plan", "once", "figure", "base", "star", "hear", "box", "horse", "noun", "cut", "field", "sure", "rest", "watch", "correct", "able", "face", "pound", "wood", "done", "main", "beauty", "enough", "drive", "plain", "stood", "girl", "contain", "usual", "front", "young", "teach", "ready", "week", "above", "final", "ever", "gave", "red", "green", "list", "oh", "though", "quick", "feel", "develop", "talk", "sleep", "bird", "warm", "soon", "free", "body", "minute", "dog", "strong", "family", "special", "direct", "mind", "pose", "behind", "leave", "clear", "song", "tail", "measure", "produce", "state", "fact", "product", "street", "black", "inch", "short", "lot", "numeral", "nothing", "class", "course", "wind", "stay", "question", "wheel", "happen", "full", "complete", "force", "ship", "blue", "area", "object", "half", "decide", "rock", "surface", "order", "deep", "fire", "moon", "south", "island", "problem", "foot", "piece", "yet", "told", "busy", "knew", "test", "pass", "record", "farm", "boat", "top", "common", "whole", "gold", "king", "possible", "size", "plane", "heard", "age", "best", "dry", "hour", "wonder", "better", "laugh", "true", "thousand", "during", "ago", "hundred", "ran", "am", "check", "remember", "game", "step", "shape", "early", "yes", "hold", "hot", "west", "miss", "ground", "brought", "interest", "heat", "reach", "snow", "fast", "bed", "five", "bring", "sing", "sit", "listen", "perhaps", "six", "fill", "table", "east", "travel", "weight", "less", "language", "morning", "among", "speed", "typing", "mineral", "seven", "eight", "nine", "everything", "something", "standard", "distant", "paint"],
            text: "",
            userText: "",
            startTime: -1,
            done: 0,
            lastTime: -1,
            tl: 60,
        }
    }
    componentDidMount(){
        this.reset("random");
    }
    start(event){
        this.setState({userText:event.target.value});
        if(this.state.startTime==-1) this.setState({startTime:Date.now()});
        else if(this.state.startTime+this.state.tl*1000<Date.now()) this.end();
    }
    end(){
        if(this.state.done==1) return;
        this.setState({lastTime:(Date.now()-this.state.startTime)/1000,done:1});
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
        this.setState({userText:"",startTime:-1,done:0,lastTime:-1});
    }
    setText(event){
        this.setState({text:event.target.value});
    }
    setTL(event){
        this.setState({tl:event.target.value});
    }
    render(){
        if(this.state.done){
            var s='.'+this.state.text,t='.'+this.state.userText,userOut=[],textOut=[],cpm=0;
            if(s.length*t.length<=4194304){
                var dp=Array(s.length).fill().map(()=>Array(t.length)),pre=Array(s.length).fill().map(()=>Array(t.length));
                dp[0][0]=[0,0];
                for(let i=0;i<s.length;i++) for(let j=0;j<t.length;j++) for(let k=0;k<2;k++){
                    if(k==0&&!(i==0&&j==0)){
                        dp[i][j]=[-1e9,-1e9];
                        pre[i][j]=[0,0];
                    }
                    if(i>0&&dp[i][j][0]<dp[i-1][j][k]){
                        dp[i][j][0]=dp[i-1][j][k]; pre[i][j][0]=2+10*k;
                    }
                    if(j>0&&dp[i][j][0]<dp[i][j-1][k]){
                        dp[i][j][0]=dp[i][j-1][k]; pre[i][j][0]=1+10*k;
                    }
                    if(i>0&&j>0&&s[i]==t[j]&&dp[i][j][1]<dp[i-1][j-1][k]+1+(k-1)){
                        dp[i][j][1]=dp[i-1][j-1][k]+1+(k-1); pre[i][j][1]=0+10*k;
                    }
                }
                for(let i=s.length-1,j=t.length-1,k=dp[i][j][0]>=dp[i][j][1]? 0:1,p=0;i>0||j>0;){
                    p=pre[i][j][k]%10; k=pre[i][j][k]>=10? 1:0;
                    if(p==0){
                        textOut.push(<span className="highlight" key={i}>{s[i]}</span>);
                        userOut.push(<span className="highlight" key={j}>{t[j]}</span>);
                        i--; j--; cpm++;
                    }
                    else if(p==1){
                        userOut.push(<span key={j}>{t[j]}</span>);
                        j--;
                    }
                    else{
                        textOut.push(<span key={i}>{s[i]}</span>);
                        i--;
                    }
                }
                textOut=textOut.reverse(); userOut=userOut.reverse();
            }
            else{
                var jj=1;
                for(let ii=1;ii<s.length;ii+=10){
                    let s1='.'+s.substr(ii,10),t1='.'+t.substr(jj,15),textOut1=[],userOut1=[],first=1;
                    let dp=Array(s1.length).fill().map(()=>Array(t1.length)),pre=Array(s1.length).fill().map(()=>Array(t1.length));
                    dp[0][0]=[0,0];
                    for(let i=0;i<s1.length;i++) for(let j=0;j<t1.length;j++) for(let k=0;k<2;k++){
                        if(k==0&&!(i==0&&j==0)){
                            dp[i][j]=[-1e9,-1e9];
                            pre[i][j]=[0,0];
                        }
                        if(i>0&&dp[i][j][0]<dp[i-1][j][k]){
                            dp[i][j][0]=dp[i-1][j][k]; pre[i][j][0]=2+10*k;
                        }
                        if(j>0&&dp[i][j][0]<dp[i][j-1][k]){
                            dp[i][j][0]=dp[i][j-1][k]; pre[i][j][0]=1+10*k;
                        }
                        if(i>0&&j>0&&s1[i]==t1[j]&&dp[i][j][1]<dp[i-1][j-1][k]+1+(k-1)){
                            dp[i][j][1]=dp[i-1][j-1][k]+1+(k-1); pre[i][j][1]=0+10*k;
                        }
                    }
                    if(Math.max(dp[s1.length-1][t1.length-1][0],dp[s1.length-1][t1.length-1][0])<s1.length/2){
                        for(let i=1;i<s1.length;i++) textOut.push(<span key={i+ii-1}>{s1[i]}</span>);
                        continue;
                    }
                    for(let i=s1.length-1,j=t1.length-1,k=dp[i][j][0]>=dp[i][j][1]? 0:1,p=0;i>0||j>0;){
                        p=pre[i][j][k]%10; k=pre[i][j][k]>=10? 1:0;
                        if(p==0){
                            textOut1.push(<span className="highlight" key={i+ii-1}>{s1[i]}</span>);
                            userOut1.push(<span className="highlight" key={j+jj-1}>{t1[j]}</span>);
                            i--; j--; cpm++;
                            if(first==1) jj+=j+1;
                            first=0;
                        }
                        else if(p==1){
                            if(first==0) userOut1.push(<span key={j+jj-1}>{t1[j]}</span>);
                            j--;
                        }
                        else{
                            textOut1.push(<span key={i+ii-1}>{s1[i]}</span>);
                            i--;
                        }
                    }
                    textOut.push(textOut1.reverse()); userOut.push(userOut1.reverse());
                }
                (;jj<t.length;jj++) textOut.push(<span key={jj}>{t[jj]}</span>);
            }
            return(
                <div className="main">
                    <p>Completed in {this.state.lastTime} seconds.</p>
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
                    <p>Note: if your text is over 2048 characters the matching algorithm may be less accurate to improve speed</p>
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
                <div className="textbox">
                    <p>{this.state.text}</p>
                </div>
                <hr/>
                <button onClick={()=> this.reset()}>Reset</button>
                <button onClick={()=> this.reset("random")}>Random Words</button>
                <button onClick={()=> this.reset("text")}>Text</button>
                <button onClick={()=> this.reset("code")}>Code</button>
                <label>
                    Custom
                    <textarea className="customtext" value={this.state.text} onChange={(event) => this.setText(event)}/>
                </label>
                <label>
                    Time limit (seconds)?
                    <input className="tl" type="number" value={this.state.tl} onChange={(event) => this.setTL(event)}/>
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
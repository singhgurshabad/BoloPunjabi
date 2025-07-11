import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';


const { width, height } = Dimensions.get('window');

const welcomeImageUri = 'https://codehs.com/uploads/f9283d05fb05ba8e2239c4ce2186fcf4';
const alphabetsIconUri = 'https://codehs.com/uploads/65be12bebed6c0e82ecb2133a21988f0';
const numbersIconUri = 'https://codehs.com/uploads/7ae9967df9c4128b9b1b11a94869b06d';
const moharniIconUri = 'https://codehs.com/uploads/66a86d3e59a0795d19cd6f51cafc2bba';
const settingsIconUri = 'https://codehs.com/uploads/1a062769469c910ef02019166cfb283e';

const alphabetData = [
  { letter: 'ੳ', pronunciation: 'Ou', name: 'oorhaa', soundUrl: 'https://codehs.com/uploads/f2a359ff0540a94627d40f504e4a3369' },
  { letter: 'ਅ', pronunciation: 'Aa', name: 'airhaa', soundUrl: 'https://codehs.com/uploads/2f4b69100218946e4095ea4168e6bbf8' },
  { letter: 'ੲ', pronunciation: 'Ie', name: 'eerhee', soundUrl: 'https://codehs.com/uploads/0581ec66d5c93959a16f4278eedf4eae' },
  { letter: 'ਸ', pronunciation: 'Sa', name: 'sassaa' , soundUrl: 'https://codehs.com/uploads/eb85bbb52ec3bbad5df452876428b162'},
  { letter: 'ਹ', pronunciation: 'Ha', name: 'haahaa', soundUrl: 'https://codehs.com/uploads/33e64681d1b849352de38176db8b3f01' },
  { letter: 'ਕ', pronunciation: 'Ka', name: 'kakkaa' , soundUrl: 'https://codehs.com/uploads/b824e3f6ec2c2eea23698f1796d82251'},
  { letter: 'ਖ', pronunciation: 'Kha', name: 'khakhkha', soundUrl: 'https://codehs.com/uploads/ad808767c780753784e659b2251b7ff4' },
  { letter: 'ਗ', pronunciation: 'Ga', name: 'gaggaa' , soundUrl: 'https://codehs.com/uploads/8ca1efec11e0dc4de58001b81236ced5'},
  { letter: 'ਘ', pronunciation: 'Gha', name: 'ghaggaa' , soundUrl: 'https://codehs.com/uploads/9dff7d2c1e3ecb4da9d00a81e023b20c'},
  { letter: 'ਙ', pronunciation: 'Nga', name: 'nganngaa', soundUrl: 'https://codehs.com/uploads/c52804c204f6685f01f297f1275d8f1c' },
  { letter: 'ਚ', pronunciation: 'Cha', name: 'chachchaa' , soundUrl: 'https://codehs.com/uploads/0bc1754d1a8473b9f64ba7265bd4d5d8'},
  { letter: 'ਛ', pronunciation: 'Chha', name: 'shashaa' , soundUrl: 'https://codehs.com/uploads/1a08a604618cd09ce09081101137a632'},
  { letter: 'ਜ', pronunciation: 'Ja', name: 'jajjaa' , soundUrl: 'https://codehs.com/uploads/94675685c6dfbaa948a748cf70015199'},
  { letter: 'ਝ', pronunciation: 'Jha', name: 'jhajjaa' , soundUrl: 'https://codehs.com/uploads/86b0a1c49316c343d3c9ea3beb6426d8'},
  { letter: 'ਞ', pronunciation: 'Nja', name: 'njannjaa' , soundUrl: 'https://codehs.com/uploads/f32c5a8c33ec2ce57d601d08b8407bb1'},
  { letter: 'ਟ', pronunciation: 'Ta', name: 'tainkaa' , soundUrl: 'https://codehs.com/uploads/3c45e9a9937d558a864402cd3ef0f647'},
  { letter: 'ਠ', pronunciation: 'Tha', name: 'thaththaa', soundUrl: 'https://codehs.com/uploads/b3677ccb6ef0a2f57542273c43116ff5' },
  { letter: 'ਡ', pronunciation: 'Da', name: 'daddaa' , soundUrl: 'https://codehs.com/uploads/17acab27cadeca9de7170b7b2a8f45f3'},
  { letter: 'ਢ', pronunciation: 'Dha', name: 'dhaddaa', soundUrl: 'https://codehs.com/uploads/45221a58d22b9e1777c0394472fd473c' },
  { letter: 'ਣ', pronunciation: 'Na', name: 'nhaanhaa' , soundUrl: 'https://codehs.com/uploads/0ab4edd952dca51af19a91881873148f'},
  { letter: 'ਤ', pronunciation: 'Ta', name: 'tattaa' , soundUrl: 'https://codehs.com/uploads/2d21c01e095d9f3e36f1afd14626faff'},
  { letter: 'ਥ', pronunciation: 'Tha', name: 'thaththaa' , soundUrl: 'https://codehs.com/uploads/21ec54737f44e5707cd272149741a488'},
  { letter: 'ਦ', pronunciation: 'Da', name: 'daddaa', soundUrl: 'https://codehs.com/uploads/ca80825300139e0b55c45e46b07ea3d9' },
  { letter: 'ਧ', pronunciation: 'Dha', name: 'dhaddaa' , soundUrl: 'https://codehs.com/uploads/01d4b6ddfbbbc5f85ad66cf53a08bdd8'},
  { letter: 'ਨ', pronunciation: 'Na', name: 'nannaa', soundUrl: 'https://codehs.com/uploads/5d3ae7c4583b5482465f3b260b3e1834' },
  { letter: 'ਪ', pronunciation: 'Pa', name: 'pappaa' , soundUrl: 'https://codehs.com/uploads/78905b7dc3e3732ad9a80179fea7f0c7'},
  { letter: 'ਫ', pronunciation: 'Pha', name: 'phaphaa', soundUrl: 'https://codehs.com/uploads/f7d080ce8464d49c4abf9c38039932b9' },
  { letter: 'ਬ', pronunciation: 'Ba', name: 'babbaa', soundUrl: 'https://codehs.com/uploads/7acb432db7459bc099f63e346c4b32de' },
  { letter: 'ਭ', pronunciation: 'Bha', name: 'bhabbaa' , soundUrl: 'https://codehs.com/uploads/98b44288d08cdaeca9bdfb4bfdb6214b'},
  { letter: 'ਮ', pronunciation: 'Ma', name: 'mammaa' , soundUrl: 'https://codehs.com/uploads/89afd76ac93fe0a8263622e0158e6c1d'},
  { letter: 'ਯ', pronunciation: 'Ya', name: 'yayyaa' , soundUrl: 'https://codehs.com/uploads/6f903a98ee60a2693a90bc5fd0735583'},
  { letter: 'ਰ', pronunciation: 'Ra', name: 'raaraa', soundUrl: 'https://codehs.com/uploads/3d92a7e8609b7b7ef32fa235b2c27295' },
  { letter: 'ਲ', pronunciation: 'La', name: 'lallaa' , soundUrl: 'https://codehs.com/uploads/d875772251771503b63b74a3521d13b3'},
  { letter: 'ਵ', pronunciation: 'Va', name: 'vavvaa', soundUrl: 'https://codehs.com/uploads/9fb5e78e287078d2f1331860bdcd8413' },
  { letter: 'ੜ', pronunciation: 'Ra', name: 'rhaarhaa', soundUrl: 'https://codehs.com/uploads/2f31c2f38dbf2b92f90adafd5d84b3e6' },
  { letter: 'ਸ਼', pronunciation: 'Sha', name: 'shashasha' , soundUrl: 'https://codehs.com/uploads/eb884ce504828c2a5410b1e8826f32d3'},
  { letter: 'ਖ਼', pronunciation: 'Khha', name: 'khakhkha', soundUrl: 'https://codehs.com/uploads/b7b32864f31f7be6cc5ce07110c79ced' },
  { letter: 'ਗ਼', pronunciation: 'Ga', name: 'ghagghaa', soundUrl: 'https://codehs.com/uploads/a643d02336827d9f7956badc32645a81' },
  { letter: 'ਜ਼', pronunciation: 'Za', name: 'zazzaa' , soundUrl: 'https://codehs.com/uploads/8c49d756d7f7c48b176245af65c2531d'},
  { letter: 'ਫ਼', pronunciation: 'Fa', name: 'faffaa' , soundUrl: 'https://codehs.com/uploads/fd2e6097a7bf5dc4c2c42692723b1632'},
  { letter: 'ਲ਼', pronunciation: 'La', name: 'lallaa', soundUrl: 'https://codehs.com/uploads/199af3e390cceb54377820fd4166374a' }
];

const numberData = [
  { numeral: '੦', punjabiName: 'ਸਿਫਰ', englishName: 'Sifar', soundUrl: 'https://codehs.com/uploads/aa904ae8983e338ef953fee825140dbe'  },
  { numeral: '੧', punjabiName: 'ਇੱਕ', englishName: 'Ek', soundUrl: 'https://codehs.com/uploads/8fa7c12cce6c9b97b2f69e3294e9a342'   },
  { numeral: '੨', punjabiName: 'ਦੋ', englishName: 'Do', soundUrl: 'https://codehs.com/uploads/2ed4ae87712b01714021d5c181202869'   },
  { numeral: '੩', punjabiName: 'ਤਿੰਨ', englishName: 'Tin' , soundUrl: 'https://codehs.com/uploads/9ac6fae701aff09e925f7bb3820aa420'  },
  { numeral: '੪', punjabiName: 'ਚਾਰ', englishName: 'Char' , soundUrl: 'https://codehs.com/uploads/561562a0595a62d2ea04c943be29df5d'  },
  { numeral: '੫', punjabiName: 'ਪੰਜ', englishName: 'Panj' , soundUrl: 'https://codehs.com/uploads/82633db3f6c8b694b5487d214d37cfee'  },
  { numeral: '੬', punjabiName: 'ਛੇ', englishName: 'Shye' , soundUrl: 'https://codehs.com/uploads/3e8d8a5526ef2630fceb141aa0412615'  },
  { numeral: '੭', punjabiName: 'ਸੱਤ', englishName: 'Satt' , soundUrl: 'https://codehs.com/uploads/59db3af291e0208efd763cf6f2d95246'  },
  { numeral: '੮', punjabiName: 'ਅੱਠ', englishName: 'Ath' , soundUrl: 'https://codehs.com/uploads/b4335e3c85f562ad76234496e0b2e5a5'  },
  { numeral: '੯', punjabiName: 'ਨੌੰ', englishName: 'No' , soundUrl: 'https://codehs.com/uploads/0fc1cc41c9c613d56660ec603b4daacf'  },
  { numeral: '੧੦', punjabiName: 'ਦੱਸ', englishName: 'Dass' , soundUrl: 'https://codehs.com/uploads/d391ac0877542d6db2698826e227f9e7'  },
  { numeral: '੧੧', punjabiName: 'ਗਿਆਰਾਂ', englishName: 'Giayra' , soundUrl: 'https://codehs.com/uploads/2531d97fe869c780ca5c624e1292a634'  },
  { numeral: '੧੨', punjabiName: 'ਬਾਰਾਂ', englishName: 'Bara' , soundUrl: 'https://codehs.com/uploads/6382fd7c32a17e2ae446dceaf550dca9'  },
  { numeral: '੧੩', punjabiName: 'ਤੇਰਾਂ', englishName: 'Tera' , soundUrl: 'https://codehs.com/uploads/721d0d9c198c015103c269d10e26c956'  },
  { numeral: '੧੪', punjabiName: 'ਚੌਦਾਂ', englishName: 'Chauda', soundUrl: 'https://codehs.com/uploads/731753c43fabd930cb443e0ed7adcc7f'   },
  { numeral: '੧੫', punjabiName: 'ਪੰਦਰਾਂ', englishName: 'Pandra' , soundUrl: 'https://codehs.com/uploads/a1ba08a14043152dfae32ee4b23f71db'  },
  { numeral: '੧੬', punjabiName: 'ਸੋਲ਼ਾਂ', englishName: 'Sola' , soundUrl: 'https://codehs.com/uploads/ef3473e372c41f97a9886658774d7947'  },
  { numeral: '੧੭', punjabiName: 'ਸਤਾਰਾਂ', englishName: 'Stara' , soundUrl: 'https://codehs.com/uploads/37ca1e4ed87fb49a0036f4ab243aed9e'  },
  { numeral: '੧੮', punjabiName: 'ਅਠਾਰਾਂ', englishName: 'Athara' , soundUrl: 'https://codehs.com/uploads/f54bfd198e8c3813a3b93585a58c1434'  },
  { numeral: '੧੯', punjabiName: 'ਉਨੀ', englishName: 'Unni' , soundUrl: 'https://codehs.com/uploads/729b0a33ce5df3fd4980d0aaac043008'  },
  { numeral: '੨੦', punjabiName: 'ਵੀਹ', englishName: 'Vih', soundUrl: 'https://codehs.com/uploads/d92114d259422904d7701b93b3a5ae9b'   },
  { numeral: '੩੦', punjabiName: 'ਤੀਹ', englishName: 'Tih' , soundUrl: 'https://codehs.com/uploads/f86ebc2761e849cdc64ae001f84111fe'  },
  { numeral: '੪੦', punjabiName: 'ਚਾਲੀ', englishName: 'Chaali' , soundUrl: 'https://codehs.com/uploads/cc7e23065caaa41f0ab558708ca103df'  },
  { numeral: '੫੦', punjabiName: 'ਪੰਜਾਹ', englishName: 'Panajh' , soundUrl: 'https://codehs.com/uploads/c1e4804c38bf4fed784fb0e6191a37d5'  },
  { numeral: '੬੦', punjabiName: 'ਸੱਠ', englishName: 'Sath' , soundUrl: 'https://codehs.com/uploads/fae4312ffc442cef057ddb73946f03c1'  },
  { numeral: '੭੦', punjabiName: 'ਸੱਤਰ', englishName: 'Sattar' , soundUrl: 'https://codehs.com/uploads/42efb8d7dc23ca421958f3a643bb0dc4'  },
  { numeral: '੮੦', punjabiName: 'ਅੱਸੀ', englishName: 'Assi' , soundUrl: 'https://codehs.com/uploads/8e20fc60536d89f6f7e20241752fc8d8'  },
  { numeral: '੯੦', punjabiName: 'ਨੱਬੇ', englishName: 'Nabbe' , soundUrl: 'https://codehs.com/uploads/6875563d508c4b643054633448ba0a2d'  },
  { numeral: '੧੦੦', punjabiName: 'ਸੌ', englishName: 'Sau' , soundUrl: 'https://codehs.com/uploads/f82b7bed14b4ed472b869dbcc7a6e75f'  },
  { numeral: '੧੦੦੦', punjabiName: 'ਹਜਾਰ', englishName: 'Hajaar' , soundUrl: 'https://codehs.com/uploads/f83568181523a25ada7408e74907bcd8'  },
  { numeral: '੧੦੦੦੦', punjabiName: 'ਲੱਖ', englishName: 'Lakh' , soundUrl: 'https://codehs.com/uploads/931023ec9e617ca60d2ba21895e96320'  },
  { numeral: '੧੦੦੦੦੦', punjabiName: 'ਦੱਸ ਲੱਖ', englishName: 'Das Lakh' , soundUrl: 'https://codehs.com/uploads/a0ad19a08035b3958cf77d54c237947b'  },
  { numeral: '੧੦੦੦੦੦੦', punjabiName: 'ਕਰੋੜ', englishName: 'Crore' , soundUrl: 'https://codehs.com/uploads/2ee8ec4a529f8c114621da5225efe2ed'  }
];


const moharniData = [
  { 
    moharni: 'Invisible', 
    pronunciation: ' ', 
    punjabiName: 'ਮੁਕਤਾ', 
    englishName: 'Mukta', 
    hindiName: 'मुक्ता',
    soundUrl: '' 
  },
  { 
    moharni: 'ਾ', 
    pronunciation: 'aa', 
    punjabiName: 'ਕੰਨਾ', 
    englishName: 'Kanna', 
    hindiName: 'कन्ना', 
    soundUrl: 'https://codehs.com/uploads/07d586275e36a639587aeda9f2173f1f' 
  },
  { 
    moharni: 'ਿ', 
    pronunciation: 'e', 
    punjabiName: 'ਸਿਹਾਰੀ', 
    englishName: 'Sihari', 
    hindiName: 'सिहारी', 
    soundUrl: 'https://codehs.com/uploads/32649a5391047f7a9fce9097659718fb' 
  },
  { 
    moharni: 'ੀ', 
    pronunciation: 'ee', 
    punjabiName: 'ਬਿਹਾਰੀ', 
    englishName: 'Bihari', 
    hindiName: 'बिहारी', 
    soundUrl: 'https://codehs.com/uploads/9ba0093705418c99f6354d30dcd8e956' 
  },
  { 
    moharni: 'ੁ', 
    pronunciation: 'oo', 
    punjabiName: 'ਔਂਕੜ', 
    englishName: 'Aunkar', 
    hindiName: 'आंकर', 
    soundUrl: 'https://codehs.com/uploads/cb0de0725bc01d8390e73fc90c856b11' 
  },
  { 
    moharni: 'ੂ', 
    pronunciation: 'ooh', 
    punjabiName: 'ਦੁਲੈਂਕਰ', 
    englishName: 'Dulainkar', 
    hindiName: 'दुलैंकर', 
    soundUrl: 'https://codehs.com/uploads/758ffe5d3b180e24eb6a0a976cfa7884' 
  },
  { 
    moharni: 'ੇ', 
    pronunciation: 'ay', 
    punjabiName: 'ਲਾਵਾਂ', 
    englishName: 'Laavan', 
    hindiName: 'लावां', 
    soundUrl: 'https://codehs.com/uploads/a4b006892aa801c819f133fbcd4f2828' 
  },
  { 
    moharni: 'ੈ', 
    pronunciation: 'ai', 
    punjabiName: 'ਦੁਲਾਵਾਂ', 
    englishName: 'Dulaavan', 
    hindiName: 'दुलावां', 
    soundUrl: 'https://codehs.com/uploads/7174f456591f32411abda680d193fd44' 
  },
  { 
    moharni: 'ੋ', 
    pronunciation: 'oh', 
    punjabiName: 'ਹੋੜਾ', 
    englishName: 'Hora', 
    hindiName: 'होड़ा', 
    soundUrl: 'https://codehs.com/uploads/9f5dc686183ca768a9880ae29b018f58' 
  },
  { 
    moharni: 'ੌ', 
    pronunciation: 'au', 
    punjabiName: 'ਕਨੌੜਾ', 
    englishName: 'Kanohra', 
    hindiName: 'कनौड़ा', 
    soundUrl: 'https://codehs.com/uploads/5cfb84b82bfd125bf4fb1a299da24fb1' 
  },
  { 
    moharni: 'ੰ', 
    pronunciation: 'um', 
    punjabiName: 'ਟਿੱਪੀ', 
    englishName: 'Tippee', 
    hindiName: 'टिप्पी', 
    soundUrl: 'https://codehs.com/uploads/1bc353da57775c4b6feb29ee9cd2b2ee' 
  },
  { 
    moharni: 'ਂ', 
    pronunciation: 'ng', 
    punjabiName: 'ਬਿੰਦੀ', 
    englishName: 'Bindee', 
    hindiName: 'बिंदी', 
    soundUrl: 'https://codehs.com/uploads/456df5457afb6290c1a13f7dffc0f780' 
  },
  { 
    moharni: 'ੱ', 
    pronunciation: 'ah', 
    punjabiName: 'ਅਧਕ', 
    englishName: 'Adhak', 
    hindiName: 'अधक', 
    soundUrl: '' 
  },
];





const themes = {
    blue: '#1d3cec',
    yellow: '#FFD700',
    black: '#000000',

};

const languages = {
    en: {
        alphabets: 'Punjabi Alphabets',
        numbers: 'Learn Punjabi Numbers',
        moharni: 'Learn Moharni Signs',
        settings: 'Settings',
        changeTheme: 'Change Theme',
        changeLanguage: 'Change Language',
    },
    hi: {
        alphabets: 'पंजाबी अक्षर',
        numbers: 'पंजाबी अंक सीखें',
        moharni: 'मोहरणी चिन्ह सीखें',
        settings: 'सेटिंग्स',
        changeTheme: 'थीम बदलें',
        changeLanguage: 'भाषा बदलें',
    },
    es: {
        alphabets: 'Alfabetos Panyabi',
        numbers: 'Aprende Números Panyabi',
        moharni: 'Aprende Signos Moharni',
        settings: 'Configuración',
        changeTheme: 'Cambiar Tema',
        changeLanguage: 'Cambiar Idioma',
    },
};


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcome: true,
            currentPage: 'Alphabets',
            themeColor: themes.blue,
            language: 'en',
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showWelcome: false });
        }, 2000);
    }

    switchPage = (page) => {
        this.setState({ currentPage: page });
    };

    changeTheme = (color) => {
        this.setState({ themeColor: color });
    };

    changeLanguage = (lang) => {
        this.setState({ language: lang });
    };

    render() {
        const { showWelcome, currentPage, themeColor, language } = this.state;
        const texts = languages[language];

        return (
            <View style={[styles.container, { backgroundColor: themeColor }]}>
                {showWelcome ? (
                    <View style={styles.welcomeContainer}>
                        <Image source={{ uri: welcomeImageUri }} style={styles.welcomeImage} resizeMode="contain" />
                        <Text style={styles.welcomeText}>Bolo Punjabi</Text>
                    </View>
                ) : (
                    <View style={styles.homeContainer}>
                        <Text style={styles.header}>Bolo Punjabi</Text>
                        <ScrollView style={styles.content}>
                            {currentPage === 'Alphabets' && <AlphabetsPage language={language} />}
                            {currentPage === 'Numbers' && <NumbersPage language={language} />}
                            {currentPage === 'Moharni' && <MoharniPage language={language} />}
                            {currentPage === 'Settings' && (
                                <SettingsPage
                                    themeColor={themeColor}
                                    onThemeChange={this.changeTheme}
                                    onLanguageChange={this.changeLanguage}
                                    texts={texts}
                                />
                            )}
                        </ScrollView>
                        <View style={[styles.navbar, { backgroundColor: themeColor }]}>
                            <TouchableOpacity onPress={() => this.switchPage('Alphabets')}>
                                <Image source={{ uri: alphabetsIconUri }} style={styles.navIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.switchPage('Numbers')}>
                                <Image source={{ uri: numbersIconUri }} style={styles.navIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.switchPage('Moharni')}>
                                <Image source={{ uri: moharniIconUri }} style={styles.navIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.switchPage('Settings')}>
                                <Image source={{ uri: settingsIconUri }} style={styles.navIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}
const AlphabetsPage = ({ language }) => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>
                {languages[language].alphabets}
            </Text>
            <AlphabetGrid data={alphabetData} />
        </View>
    );
};

const AlphabetGrid = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.letter}
            numColumns={5}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => <AlphabetItem item={item} />}
        />
    );
};

const AlphabetItem = ({ item }) => {
    const playSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: item.soundUrl }  
            );
            await sound.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    return (
        <TouchableOpacity onPress={playSound}>
            <View style={styles.alphabetBox}>
                <Text style={styles.letter}>{item.letter}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.pronunciation}>{item.pronunciation}</Text>
            </View>
        </TouchableOpacity>
    );
};

const NumbersPage = ({ language }) => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>{languages[language].numbers}</Text>
        <NumbersGrid />
    </View>
);

const NumbersGrid = () => (
    <FlatList
        data={numberData}
        keyExtractor={(item) => item.numeral}
        numColumns={3} 
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => <NumberItem item={item} />}
    />
);

const NumberItem = ({ item }) => {
    const playSound = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: item.soundUrl }  
            );
            await sound.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    return (
        <TouchableOpacity onPress={playSound}>
            <View style={styles.numberBox}>
                <Text style={styles.numeral}>{item.numeral}</Text>
                <Text style={styles.punjabiName}>{item.punjabiName}</Text>
                <Text style={styles.englishName}>{item.englishName}</Text>
            </View>
        </TouchableOpacity>
    );
};
const MoharniPage = ({ language }) => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>
                {languages[language].moharni}
            </Text>
            <MoharniGrid data={moharniData} />
        </View>
    );
};

const MoharniGrid = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.moharni}
            numColumns={3} // Adjusted for visual layout of items
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => <MoharniItem item={item} />}
        />
    );
};

const MoharniItem = ({ item, language }) => {
    const playSound = async () => {
        if (item.soundUrl) {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: item.soundUrl }
                );
                await sound.playAsync();
            } catch (error) {
                console.error('Error playing sound:', error);
            }
        }
    };

    // Determine the name to display based on the selected language
    let nameToDisplay = '';
    if (language === 'punjabi') {
        nameToDisplay = item.punjabiName;
    } else if (language === 'english') {
        nameToDisplay = item.englishName;
    } else if (language === 'hindi') {
        nameToDisplay = item.hindiName;
    }

    return (
        <TouchableOpacity onPress={playSound}>
            <View style={styles.moharniBox}>
                <Text style={styles.moharni}>{item.moharni}</Text>
                <Text style={styles.moharniName}>{nameToDisplay}</Text>
                <Text style={styles.pronunciation}>{item.pronunciation}</Text>
            </View>
        </TouchableOpacity>
    );
};


const SettingsPage = ({ themeColor, onThemeChange, onLanguageChange, texts }) => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>{texts.settings}</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onThemeChange(themes.blue)}>
            <Text style={styles.buttonText}>{texts.changeTheme} - Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onThemeChange(themes.yellow)}>
            <Text style={styles.buttonText}>{texts.changeTheme} - Yellow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onThemeChange(themes.black)}>
            <Text style={styles.buttonText}>{texts.changeTheme} - Black</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onLanguageChange('en')}>
            <Text style={styles.buttonText}>{texts.changeLanguage} - English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onLanguageChange('hi')}>
            <Text style={styles.buttonText}>{texts.changeLanguage} - Hindi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => onLanguageChange('es')}>
            <Text style={styles.buttonText}>{texts.changeLanguage} - Spanish</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d3cec',
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeImage: {
        width: width * 0.5,
        height: height * 0.3,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: width * 0.08,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    homeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: width * 0.065,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
        paddingTop: Constants.statusBarHeight + 5,
    },
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    pageTitle: {
        fontSize: width * 0.07,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    pageText: {
        fontSize: width * 0.05,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1d3cec',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        width: width * 0.8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: 'bold',
    },
     alphabetBox: {
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: (width / 5) - 20,
    },
    letter: {
        fontSize: width * 0.05, 
        fontWeight: 'bold',
    },
    name: {
        fontSize: width * 0.02, 
    },
    pronunciation: {
        fontSize: width * 0.035, 
        color: 'gray',
    },
    flatListContainer: {
        alignItems: 'center',
    },
    numberBox: {
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: (width / 3) - 20,
    },
    numeral: {
        fontSize: width * 0.05, 
        fontWeight: 'bold',
    },
    moharniBox: {
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        width: (width / 3) - 20,
    },
    moharni: {
        fontSize: width * 0.05, 
        fontWeight: 'bold',
    },
    moharniName: {
        fontSize: width * 0.02, 
    },
    punjabiName: {
        fontSize: width * 0.02, 
    },
    englishName: {
        fontSize: width * 0.035, 
        color: 'gray',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 1,
        backgroundColor: '#1d3cec',
        width: '100%',
        height: height * 0.1,
    },
    navIcon: {
        width: (width / 4) - 30,
        height: (width / 4) - 30,
        marginBottom: height * 0.05,
    },
    
});

AppRegistry.registerComponent('BoloPunjabi', () => App);
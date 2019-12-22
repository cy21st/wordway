interface LookUpOptions {
  sourceLanguage?: string;
  targetLanguage?: string;
}
interface LookUpResult {
  engine: string;               // 字典引擎
  word: string;                 // 单词
  definitions?: Array<any>;     // 定义（基本释义）
  ukIpa?: string;               // 英语-英式音标
  ukPronunciationUrl?: string;  // 英语-英式发音链接
  usIpa?: string;               // 英语-美式音标
  usPronunciationUrl?: string;  // 英语-美式发音链接
  tenses?: Array<any>;          // 时态
  sentences?: Array<any>;       // 例句
  // 翻译（当查词非单词时需要采用下面的字段）
  sourceText?: string,          // 原始文本
  sourceAudioUrl?: string,      // 原始音频链接
  targetText?: string,          // 目标文本
  targetAudioUrl?: string,      // 目标音频链接
  // 原始数据（翻译引擎返回的数据）
  originData: any;
}

interface TranslateTextOptions {
  sourceLanguage?: string;
  targetLanguage?: string;
}
interface TranslateTextResult {
  sourceLanguage?: string;      // 原始语言
  targetLanguage?: string;      // 目标语言
  sourceText?: string,          // 原始文本
  sourceAudioUrl?: string,      // 原始音频链接
  targetText?: string,          // 目标文本
  targetAudioUrl?: string,      // 目标音频链接
  // 原始数据（翻译引擎返回的数据）
  originData: any;
}

abstract class TranslateEngine {
  public abstract get name(): string;

  public abstract lookUp(
    q: string,
    options?: LookUpOptions
  ): Promise<LookUpResult>;
  public abstract translateText(
    q: string,
    options?: TranslateTextOptions
  ): Promise<TranslateTextResult>;
}

export {
  TranslateEngine as default,
  TranslateEngine,
  LookUpOptions,
  LookUpResult,
  TranslateTextOptions,
  TranslateTextResult,
};

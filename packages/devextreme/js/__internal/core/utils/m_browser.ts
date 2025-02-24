import { extend } from '@js/core/utils/extend';
import { getNavigator } from '@js/core/utils/window';

const navigator = getNavigator();

const webkitRegExp = /(webkit)[ /]([\w.]+)/;
const mozillaRegExp = /(mozilla)(?:.*? rv:([\w.]+))/;

const browserFromUA = (ua) => {
  ua = ua.toLowerCase();

  const result: any = {};
  const matches = webkitRegExp.exec(ua)
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            || ua.indexOf('compatible') < 0 && mozillaRegExp.exec(ua)
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            || [];
  let browserName = matches[1];
  let browserVersion: any = matches[2];

  if (browserName === 'webkit') {
    result.webkit = true;

    if (ua.indexOf('chrome') >= 0 || ua.indexOf('crios') >= 0) {
      browserName = 'chrome';
      browserVersion = /(?:chrome|crios)\/(\d+\.\d+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else if (ua.indexOf('fxios') >= 0) {
      browserName = 'mozilla';
      browserVersion = /fxios\/(\d+\.\d+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else if (ua.indexOf('safari') >= 0 && /version|phantomjs/.test(ua)) {
      browserName = 'safari';
      browserVersion = /(?:version|phantomjs)\/([0-9.]+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else {
      browserName = 'unknown';
      browserVersion = /applewebkit\/([0-9.]+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    }
  }

  if (browserName) {
    result[browserName] = true;
    result.version = browserVersion;
  }

  return result;
};
const browser = extend({ _fromUA: browserFromUA }, browserFromUA(navigator.userAgent));
export { browser };

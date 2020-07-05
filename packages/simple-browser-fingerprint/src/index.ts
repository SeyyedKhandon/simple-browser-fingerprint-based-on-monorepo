/*
	Package Name: simple-browser-fingerprint based on monorepo https://github.com/SeyyedKhandon/yarn_lerna_jest_typescript
  Author: Seyyedmahdi hassanpour
  email:seyyedkhandon@gmail.com
*/

const simpleBrowserFingerprint = (return_as_array = false) => {
  try {
    const browser_features = [];
    const browser = navigator as { [index: string]: any };
    for (let key in browser) {
      let value = browser[key];
      if (typeof value === 'object') value = JSON.stringify(value);
      browser_features.push(`${key}:${value}`);
    }
    return return_as_array ? browser_features : browser_features.join(',');
  } catch (e) {
    return '';
  }
};

export default simpleBrowserFingerprint;
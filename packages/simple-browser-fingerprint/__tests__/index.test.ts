import simpleBrowserFingerprint from '../src/index';

test('i18nTranslatorForJsonTemplates', () => {
  expect(simpleBrowserFingerprint()).toContain('appCodeName');
});
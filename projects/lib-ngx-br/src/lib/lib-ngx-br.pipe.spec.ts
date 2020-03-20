import { LibNgxBrPipe } from './lib-ngx-br.pipe';

describe('LibNgxBrPipe', () => {
  it('create an instance', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Convert all line breaks to br elements', () => {
  it('Convert one line break to br element', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe.transform('foo\nbar')).toBe('foo<br>bar');
  });

  it('Convert three line breaks to br elements', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe.transform('foo\n\n\nbar')).toBe('foo<br><br><br>bar');
  });

  it('All line breaks convert to br elements in Each places', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe.transform('foo\nbar\n\nbaz')).toBe('foo<br>bar<br><br>baz');
  });

  it('Ignore converting line break on head of line', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe.transform('\nfoo\nbar\n\nbaz\nqux')).toBe('foo<br>bar<br><br>baz<br>qux');
  });

  it('Ignore converting line break on end of line', () => {
    const pipe = new LibNgxBrPipe();
    expect(pipe.transform('foo\nbar\n\nbaz\nqux\n\n')).toBe('foo<br>bar<br><br>baz<br>qux');
  });
});

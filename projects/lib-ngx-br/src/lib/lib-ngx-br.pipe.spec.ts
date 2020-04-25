import { LibNgxBrPipe } from './lib-ngx-br.pipe';

describe('LibNgxBrPipe', () => {
  const pipe = new LibNgxBrPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('convert one line break to br element', () => {
    expect(pipe.transform('foo\nbar')).toBe('foo<br>bar');
  });

  it('convert three line breaks to br elements', () => {
    expect(pipe.transform('foo\n\n\nbar')).toBe('foo<br><br><br>bar');
  });

  it('all line breaks convert to br elements in Each places', () => {
    expect(pipe.transform('foo\nbar\n\nbaz')).toBe('foo<br>bar<br><br>baz');
  });

  it('ignore converting line break on head of line', () => {
    expect(pipe.transform('\nfoo\nbar\n\nbaz\nqux')).toBe('foo<br>bar<br><br>baz<br>qux');
  });

  it('ignore converting line break on end of line', () => {
    expect(pipe.transform('foo\nbar\n\nbaz\nqux\n\n')).toBe('foo<br>bar<br><br>baz<br>qux');
  });
});

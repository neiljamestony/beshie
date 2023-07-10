/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
export default function Index() {
  const [bs, sBs] = useState<string>('');
  const [res, setRes] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const tRows = 10;
  const tColumns = 60;
  const disableButton: boolean = bs === ('' || ' ');

  const convert_text = () => {
    const result: string = bs.replace(/ /g, '🤸‍♀️');
    setRes(result);
    sBs('');
  };

  const copy_text = async (): Promise<string> => {
    setIsLoading(!isLoading);
    await navigator?.clipboard?.writeText(`\n${res}\n`);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return navigator?.clipboard?.readText();
  };

  return (
    <div>
      <div className='title'>Beshie App 🤸‍♀️🤸‍♀️🤸‍♀️</div>
      <div className='content'>
        <input
          type='text'
          name='beshie'
          value={bs}
          onChange={(e) => sBs(e.target.value)}
          placeholder='Input text here'
          className='beshie_input'
        />
        <button type='button' onClick={convert_text} disabled={disableButton}>
          convert
        </button>
      </div>
      <div className='result-content'>
        <textarea
          id='beshie_textarea'
          name='beshie_textarea'
          rows={tRows}
          cols={tColumns}
          value={res}
          readOnly
        />
      </div>
      {disableButton && (
        <span data-tooltip='Tooltip help here!' data-flow='right'>
          CSS Tooltips
        </span>
      )}
      <button className='copy-button' onClick={() => copy_text()}>
        {!isLoading ? 'copy' : 'copied!'}
      </button>
    </div>
  );
}

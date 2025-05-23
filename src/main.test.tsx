import { vi } from 'vitest';
import * as ReactDOM from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
vi.mock('react-dom/client', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(actual as any),
    createRoot: vi.fn(() => ({ render: vi.fn() })),
  };
});

describe('main.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    vi.resetModules();
  });

  it('throws if root element is missing', async () => {
    document.body.innerHTML = '';
    await expect(import('./main')).rejects.toThrow('Root element not found');
  });

  it('calls createRoot and render with <App />', async () => {
    await import('./main');
    expect(ReactDOM.createRoot).toHaveBeenCalledTimes(1);
    const container = document.getElementById('root');
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(container);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rootInstance = (ReactDOM.createRoot as any).mock.results[0].value;
    expect(rootInstance.render).toHaveBeenCalledTimes(1);
  });
});

import { setupWorker } from 'msw';
import handlers from './handlers.ts';

export default setupWorker(...handlers);

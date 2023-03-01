import https from 'https';

/**
 * Fetches a URL and returns the response body as a string
 * @param url
 */
export const fetch = (url: string): Promise<string> => {
   return new Promise((resolve, reject) => {
      https
         .get(url, res => {
            let data = '';
            res.on('data', chunk => {
               data += chunk;
            });
            res.on('end', () => {
               resolve(data);
            });
         })
         .on('error', err => {
            reject(err);
         });
   });
};

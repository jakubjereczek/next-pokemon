import { Search as SearchIcon } from 'lucide-react';
import * as React from 'react';
import { Flex } from '@/ui/components/Flex/Flex';
import cn from '@/ui/utils/cn';

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  testid?: string;
};

const Search = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, testid, placeholder, ...props }, ref) => (
    <div className="relative w-full">
      <Flex asChild align="center">
        <div className="pointer-events-none absolute inset-y-0 left-0 rounded-md pl-5">
          <SearchIcon
            className="h-6 w-6 text-black"
            aria-hidden="true"
            focusable="false"
          />
        </div>
      </Flex>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        data-testid={testid}
        className={cn(
          'text-md h-12 w-full rounded-lg bg-lightBlueGray py-2 pl-[60px] pr-2 text-darkNavy placeholder-darkNavy/30 focus:border-lightGray focus:outline-none focus:ring-2',
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Search.displayName = 'SearchInput';

export default Search;

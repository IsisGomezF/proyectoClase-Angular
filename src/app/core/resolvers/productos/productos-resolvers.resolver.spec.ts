import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productosResolversResolver } from './productos-resolvers.resolver';

describe('productosResolversResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productosResolversResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

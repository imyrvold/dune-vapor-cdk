import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DuneVapor from '../lib/dune-vapor-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DuneVapor.DuneVaporStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DuneVaporStack } from '../lib/dune-vapor-stack';

const app = new cdk.App();
new DuneVaporStack(app, 'DuneVaporStack');

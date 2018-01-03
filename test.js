'use strict'

const path = require('path')
const nixconfig = require('nixconfig')
const test = require('tap').test
const plugin = require('./')

const sampleYaml = {
  step1: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5.4,
    pulseDuration: 12,
    repetition: 1000,
    spotSize: '1mm'
  },
  step2: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5,
    pulseDuration: 10,
    repetition: 500,
    spotSize: '2mm'
  },
  step3: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5.4,
    pulseDuration: 12,
    repetition: 1000,
    spotSize: '1mm'
  },
  step4: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5,
    pulseDuration: 10,
    repetition: 500,
    spotSize: '2mm'
  },
  step5: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5.4,
    pulseDuration: 12,
    repetition: 1000,
    spotSize: '2mm'
  },
  step6: {
    instrument: 'Lasik 2000',
    pulseEnergy: 5,
    pulseDuration: 10,
    repetition: 500,
    spotSize: '2mm'
  }
}

test('loads a yaml file correctly', (t) => {
  t.plan(1)
  const result = plugin['.yaml'](path.join(__dirname, 'fixtures', 'sample.yaml'))
  t.strictDeepEqual(result, sampleYaml)
})

test('works with nixconfig', (t) => {
  t.plan(1)
  process.env.nixconfig_config_home = path.join(__dirname, 'fixtures')
  const config = nixconfig({
    loaders: plugin,
    parentName: 'sample',
    parentPath: __dirname
  })
  t.strictDeepEqual(config.config, sampleYaml)
  delete process.env.nixconfig_config_home
})

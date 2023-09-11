/*!
 * Copyright (c) 2023 Dogwood Logic, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    secureld: 'urn:secureld#',

    Base: 'secureld:base',
    CareerGroup: 'secureld:CareerGroup',
    DataService: 'secureld:DataService',
    Instance: 'secureld:Instance',
    NonPersonEntity: 'secureld:NonPersonEntity',
    // eslint-disable-next-line max-len
    DataServiceAccreditationCredential: 'secureld:DataServiceAccreditationCredential',
    SoftwareApplication: 'secureld:SoftwareApplication',
    subjectData: 'secureld:subjectData',
    UnitedStatesAirForce: 'secureld:UnitedStatesAirForce',
    icaoCode: 'secureld:icaoCode',
    groupCode: 'secureld:groupCode',
    accreditation: {
      '@id': 'secureld:accreditation',
      '@type': '@id'
    },
    category: {
      '@id': 'secureld:category',
      '@type': '@id'
    },
    location: {
      '@id': 'secureld:location',
      '@type': '@id'
    },
    address: 'https://schema.org/address',
    name: 'https://schema.org/name',
    description: 'https://schema.org/description',
    service: {
      '@id': 'secureld:service',
      '@type': '@id'
    }
  }
};

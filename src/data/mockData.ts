export const companyInfo = {
  name: '安责保险服务有限公司',
  licenseNo: 'LIC-2024-001',
  contact: '400-800-0000',
  address: '北京市朝阳区安全路88号',
  qualification: '财产险保险机构许可证'
};

export const businessStats = {
  policies: 1268,
  premiumIncome: 38.6,
  claimPayout: 12.4,
  preventionInvestment: 6.8
};

export const riskAlerts = [
  {
    title: '重大隐患未整改企业',
    description: '共有 6 家企业超过整改时限仍未闭环，请督促跟进',
    severity: 'high'
  },
  {
    title: '事故预防服务费用不足',
    description: '近 3 个月共 9 家企业预防投入低于合同约定',
    severity: 'medium'
  }
];

export const products = [
  {
    name: '安责险-标准版',
    industry: '制造业',
    coverage: '设备事故、人员伤亡',
    status: '在售'
  },
  {
    name: '安责险-化工行业专属',
    industry: '危化品',
    coverage: '危险化学品泄露、污染治理',
    status: '在售'
  }
];

export const pendingApplications = [
  {
    company: '华安制造有限公司',
    region: '江苏省南京市',
    status: '待审核',
    submittedAt: '2024-01-18'
  },
  {
    company: '粤强化工集团',
    region: '广东省佛山市',
    status: '待报价',
    submittedAt: '2024-01-20'
  }
];

export const policies = [
  {
    policyNo: 'AZX-2023-0001',
    company: '华安制造有限公司',
    effectiveDate: '2023-06-01',
    expiryDate: '2024-05-31',
    status: '生效中'
  },
  {
    policyNo: 'AZX-2023-0088',
    company: '远航物流股份',
    effectiveDate: '2023-10-15',
    expiryDate: '2024-10-14',
    status: '生效中'
  }
];

export const insuredEnterprises = [
  {
    name: '华安制造有限公司',
    industry: '机械制造',
    riskLevel: '较高',
    policyStatus: '在保'
  },
  {
    name: '粤强化工集团',
    industry: '危化品',
    riskLevel: '高',
    policyStatus: '投保中'
  },
  {
    name: '远航物流股份',
    industry: '交通运输',
    riskLevel: '中',
    policyStatus: '在保'
  }
];

export const brokers = [
  {
    name: '北京中安经纪',
    contact: '李梅 138****2222',
    qualification: '保险经纪经营许可证'
  },
  {
    name: '上海稳健保险经纪',
    contact: '王强 139****9876',
    qualification: '保险经纪经营许可证'
  }
];

export const serviceAgencies = [
  {
    name: '安衡安全技术服务公司',
    specialty: '安全生产标准化咨询',
    qualification: '安全评价机构乙级',
    agreementValidUntil: '2025-12-31'
  },
  {
    name: '国信风险控制中心',
    specialty: '事故隐患排查治理',
    qualification: '安全评价机构甲级',
    agreementValidUntil: '2026-03-31'
  }
];

export const serviceTasks = [
  {
    title: '2024-Q1 安全生产评估',
    target: '华安制造有限公司',
    frequency: '季度',
    assignedTo: '安衡安全技术服务公司',
    status: '执行中'
  },
  {
    title: '危化品企业专项巡查',
    target: '粤强化工集团',
    frequency: '月度',
    assignedTo: '国信风险控制中心',
    status: '待启动'
  }
];

export const serviceArchives = [
  {
    company: '华安制造有限公司',
    lastService: '2024-01-10',
    archiveSince: '2019-05-01',
    remarks: '隐患整改完成，建议每季度复核'
  },
  {
    company: '远航物流股份',
    lastService: '2023-12-05',
    archiveSince: '2020-03-15',
    remarks: '重点关注危化品运输环节'
  }
];

export const serviceExpenses = [
  {
    project: '隐患排查专项',
    amount: 120,
    date: '2023-12-31',
    remarks: '年度隐患排查项目结算'
  },
  {
    project: '专家巡检费用',
    amount: 45,
    date: '2024-01-12',
    remarks: '专家库派驻巡检'
  }
];

export const serviceFeedback = [
  {
    company: '华安制造有限公司',
    rating: '满意',
    comment: '服务团队响应及时，整改建议可操作'
  },
  {
    company: '粤强化工集团',
    rating: '需改进',
    comment: '希望增加现场培训频次'
  }
];

export const experts = [
  {
    name: '张志强',
    specialty: '化工安全',
    certification: '注册安全工程师'
  },
  {
    name: '刘颖',
    specialty: '电气消防',
    certification: '高级工程师'
  }
];

export const claimApplications = [
  {
    caseNo: 'CLAIM-2024-0003',
    company: '华安制造有限公司',
    status: '材料补充',
    reportedAt: '2024-01-06'
  },
  {
    caseNo: 'CLAIM-2024-0004',
    company: '远航物流股份',
    status: '处理中',
    reportedAt: '2024-01-22'
  }
];

export const claimProcesses = [
  {
    step: '接报案',
    owner: '客服中心',
    status: '完成'
  },
  {
    step: '现场勘察',
    owner: '查勘人员',
    status: '进行中'
  },
  {
    step: '立案',
    owner: '理赔经理',
    status: '待启动'
  }
];

export const claimDocuments = [
  {
    name: '事故调查报告',
    status: '待上传',
    keeper: '华安制造有限公司'
  },
  {
    name: '损失评估报告',
    status: '审核中',
    keeper: '国信风险控制中心'
  }
];

export const complianceReferences = [
  {
    type: '安全评价报告',
    description: '2023 年度综合安全评价报告',
    fileStatus: '已归档'
  },
  {
    type: '许可证',
    description: '危险化学品经营许可证（有效期至2025-08-30）',
    fileStatus: '需复核'
  }
];

export const incentiveRecords = [
  {
    event: '表彰',
    description: '获评 2023 年度安全生产优秀服务机构',
    date: '2023-12-20'
  },
  {
    event: '行政处罚',
    description: '因信息报送延迟被监管约谈，已整改',
    date: '2023-09-15'
  }
];

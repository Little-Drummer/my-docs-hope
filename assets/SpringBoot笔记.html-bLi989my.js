const e=JSON.parse('{"key":"v-52a2d9ec","path":"/studyNotes/SpringBoot%E7%AC%94%E8%AE%B0.html","title":"SpringBoot笔记","lang":"zh-CN","frontmatter":{"title":"SpringBoot笔记","description":"IOC容器 Spring IOC是Spring框架中的一个重要概念，它代表着控制反转（Inversion of Control)。 控制反转是一种软件设计原则，它将对象或程序的某些部分的控制权交给容器或框架。在传统编程中，我们的代码调用库，而在控制反转中，框架接管了程序的流程并调用我们的代码。为了实现这一点，框架使用具有附加行为的抽象。如果我们想要添加...","head":[["meta",{"property":"og:url","content":"https://github.com/Little-Drummer/studyNotes/SpringBoot%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"小王笔记站"}],["meta",{"property":"og:title","content":"SpringBoot笔记"}],["meta",{"property":"og:description","content":"IOC容器 Spring IOC是Spring框架中的一个重要概念，它代表着控制反转（Inversion of Control)。 控制反转是一种软件设计原则，它将对象或程序的某些部分的控制权交给容器或框架。在传统编程中，我们的代码调用库，而在控制反转中，框架接管了程序的流程并调用我们的代码。为了实现这一点，框架使用具有附加行为的抽象。如果我们想要添加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/Little-Drummer/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-27T14:16:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot笔记"}],["meta",{"property":"article:author","content":"银角小王"}],["meta",{"property":"article:modified_time","content":"2023-12-27T14:16:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot笔记\\",\\"image\\":[\\"https://github.com/Little-Drummer/\\"],\\"dateModified\\":\\"2023-12-27T14:16:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"银角小王\\",\\"url\\":\\"https://github.com/Little-Drummer\\"}]}"]]},"headers":[{"level":2,"title":"IOC容器","slug":"ioc容器","link":"#ioc容器","children":[{"level":3,"title":"注解","slug":"注解","link":"#注解","children":[]},{"level":3,"title":"将第三方模块中的Bean加入到IOC","slug":"将第三方模块中的bean加入到ioc","link":"#将第三方模块中的bean加入到ioc","children":[]}]},{"level":2,"title":"自动配置原理","slug":"自动配置原理","link":"#自动配置原理","children":[{"level":3,"title":"启动类注解","slug":"启动类注解","link":"#启动类注解","children":[]},{"level":3,"title":"@Conditional条件注入","slug":"conditional条件注入","link":"#conditional条件注入","children":[]}]},{"level":2,"title":"三层注解","slug":"三层注解","link":"#三层注解","children":[{"level":3,"title":"Controller注解和RestController注解的区别","slug":"controller注解和restcontroller注解的区别","link":"#controller注解和restcontroller注解的区别","children":[]},{"level":3,"title":"@Service注解","slug":"service注解","link":"#service注解","children":[]},{"level":3,"title":"Component注解","slug":"component注解","link":"#component注解","children":[]},{"level":3,"title":"mapper注解","slug":"mapper注解","link":"#mapper注解","children":[]},{"level":3,"title":"Repository","slug":"repository","link":"#repository","children":[]}]},{"level":2,"title":"全局异常捕获器","slug":"全局异常捕获器","link":"#全局异常捕获器","children":[]},{"level":2,"title":"Spring请求拦截器","slug":"spring请求拦截器","link":"#spring请求拦截器","children":[{"level":3,"title":"transaction事务注解","slug":"transaction事务注解","link":"#transaction事务注解","children":[]}]},{"level":2,"title":"JWT令牌","slug":"jwt令牌","link":"#jwt令牌","children":[{"level":3,"title":"JWT生成","slug":"jwt生成","link":"#jwt生成","children":[]},{"level":3,"title":"JWT解析","slug":"jwt解析","link":"#jwt解析","children":[]}]},{"level":2,"title":"Spring配置项","slug":"spring配置项","link":"#spring配置项","children":[]},{"level":2,"title":"AOP面向切面编程","slug":"aop面向切面编程","link":"#aop面向切面编程","children":[{"level":3,"title":"在Maven中引入SpringAOP","slug":"在maven中引入springaop","link":"#在maven中引入springaop","children":[]},{"level":3,"title":"SpringAOP快速入门","slug":"springaop快速入门","link":"#springaop快速入门","children":[]},{"level":3,"title":"AOP通知类型","slug":"aop通知类型","link":"#aop通知类型","children":[]},{"level":3,"title":"PointCut切入点表达式提取","slug":"pointcut切入点表达式提取","link":"#pointcut切入点表达式提取","children":[]},{"level":3,"title":"@Order控制通知执行顺序","slug":"order控制通知执行顺序","link":"#order控制通知执行顺序","children":[]},{"level":3,"title":"切入点表达式","slug":"切入点表达式","link":"#切入点表达式","children":[]},{"level":3,"title":"切入点书写建议","slug":"切入点书写建议","link":"#切入点书写建议","children":[]}]},{"level":2,"title":"Maven高级","slug":"maven高级","link":"#maven高级","children":[{"level":3,"title":"分模块设计与开发","slug":"分模块设计与开发","link":"#分模块设计与开发","children":[]},{"level":3,"title":"Maven依赖继承","slug":"maven依赖继承","link":"#maven依赖继承","children":[]}]},{"level":2,"title":"版本锁定","slug":"版本锁定","link":"#版本锁定","children":[{"level":3,"title":"属性引用","slug":"属性引用","link":"#属性引用","children":[]},{"level":3,"title":"Maven聚合","slug":"maven聚合","link":"#maven聚合","children":[]},{"level":3,"title":"Maven私服","slug":"maven私服","link":"#maven私服","children":[]}]},{"level":2,"title":"公共字段自动填充","slug":"公共字段自动填充","link":"#公共字段自动填充","children":[{"level":3,"title":"1.1 问题分析","slug":"_1-1-问题分析","link":"#_1-1-问题分析","children":[]},{"level":3,"title":"1.2 实现思路","slug":"_1-2-实现思路","link":"#_1-2-实现思路","children":[]},{"level":3,"title":"1.3 代码开发","slug":"_1-3-代码开发","link":"#_1-3-代码开发","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1703686587000,"updatedTime":1703686587000,"contributors":[{"name":"WJA","email":"1085561450@qq.com","commits":1}]},"readingTime":{"minutes":14.7,"words":4411},"filePathRelative":"studyNotes/SpringBoot笔记.md","localizedDate":"2023年12月27日","autoDesc":true}');export{e as data};

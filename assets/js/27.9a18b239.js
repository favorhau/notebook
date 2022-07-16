(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{388:function(e,a,t){"use strict";t.r(a);var r=t(44),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" DATA")]),e._v(" "),t("h3",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("GANs are structured probabilistic model.")]),e._v(" "),t("p",[e._v("A two-player minimax game")]),e._v(" "),t("h3",{attrs:{id:"gans-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gans-components"}},[e._v("#")]),e._v(" GANS components")]),e._v(" "),t("ul",[t("li",[e._v("network architecture")]),e._v(" "),t("li",[e._v("objective funtion")]),e._v(" "),t("li",[e._v("optimization algorithm")])]),e._v(" "),t("h3",{attrs:{id:"black-stickers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#black-stickers"}},[e._v("#")]),e._v(" black stickers")]),e._v(" "),t("p",[e._v("使用所提出的算法，我们评估了扰动对物理对象的有效性，并表明对手可以使用低成本技术对对象进行物理修改，从而在距离和角度变化很大的情况下，在基于DNN的分类器中可靠地导致分类错误。例如，我们的攻击导致分类器将经过细微修改的物理停车标志分类为限速45标志。具体来说，我们的最终扰动形式是一组黑白贴纸，对手可以将这些贴纸贴在物理路标上(停车标志)。我们设计的扰动类似涂鸦，这是一种相对常见的破坏形式。如图1所示，在现实世界中经常会看到带有随机涂鸦或颜色变化的路标(左边的图像是城市中的真实路标)。如果这些随机模式是对抗性扰动(图1的右侧展示了扰动示例)，它们可能会给自动驾驶系统带来严重后果，但不会引起操作员的怀疑。")]),e._v(" "),t("h3",{attrs:{id:"fgsm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fgsm"}},[e._v("#")]),e._v(" FGSM")]),e._v(" "),t("p",[e._v("The FGSM algorithm was proposed by Goodfellow\net al. [9]. In the paper, the researchers believe that the rea\nson for adversarial examples is the linear characteristics of\ndeep neural networks in high-dimensional space.\nFGSM是一种一次攻击，即针对一张图加梯度也仅仅增一次梯度。但如果现在攻击的是一个复杂非线性模型的话，这样的方法可能就不能一定攻击成功。可以想象，复杂的非线性模型可能在极小的范围内剧烈变化，所以梯度跨度大可能就不能攻击成功")]),e._v(" "),t("h3",{attrs:{id:"digital-real-world-attack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#digital-real-world-attack"}},[e._v("#")]),e._v(" digital & real world attack")]),e._v(" "),t("p",[e._v("In the digital world, the attacker has “digital level” access")]),e._v(" "),t("p",[e._v("to the input. For example, the attacker can make arbitrary")]),e._v(" "),t("p",[e._v("pixel-level modifcations to the input image of the classifer.")]),e._v(" "),t("p",[e._v("However, in real applications, attackers cannot control the")]),e._v(" "),t("p",[e._v("sensors and data pipes of the system.")]),e._v(" "),t("h3",{attrs:{id:"attack-and-defense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attack-and-defense"}},[e._v("#")]),e._v(" attack and defense")]),e._v(" "),t("p",[t("strong",[e._v("5.1 Attack direction")])]),e._v(" "),t("p",[e._v("Just like the analysis in the third part, for the same attack")]),e._v(" "),t("p",[e._v("task in diferent scenarios, the attacker needs to design")]),e._v(" "),t("p",[e._v("diferent perturbation deployment schemes to achieve the")]),e._v(" "),t("p",[e._v("attack. This is also a key step in applying adversarial sam")]),e._v(" "),t("p",[e._v("ples to the actual physical world. Then, if we can generate")]),e._v(" "),t("p",[e._v("a universal and adaptive perturbation deployment plan, the")]),e._v(" "),t("p",[e._v("attack may be more efcient.")]),e._v(" "),t("p",[e._v("The current attack methods are often only targeted at a")]),e._v(" "),t("p",[e._v("certain sensor. But in some actual devices, there are often")]),e._v(" "),t("p",[e._v("multiple sensors, such as multi-cameras. So whether it is")]),e._v(" "),t("p",[e._v("possible to generate a suitable disturbance deployment plan")]),e._v(" "),t("p",[e._v("to deceive multiple sensors at the same time, this may be a")]),e._v(" "),t("p",[e._v("direction worth exploring.")]),e._v(" "),t("p",[e._v("In addition, in some felds, there are often many difer")]),e._v(" "),t("p",[e._v("ent sensors. For example, in the feld of autonomous driv")]),e._v(" "),t("p",[e._v("ing, the input data of the model includes not only the data")]),e._v(" "),t("p",[e._v("captured by the camera but also the data captured by the")]),e._v(" "),t("p",[e._v("LiDAR. Therefore, can we generate a suitable perturbation")]),e._v(" "),t("p",[e._v("deployment plan and deceive the camera and LiDAR at the")]),e._v(" "),t("p",[e._v("same time. This may be a direction worth exploring for the")]),e._v(" "),t("p",[e._v("attacker in the future.")]),e._v(" "),t("p",[t("strong",[e._v("5.2 Defense direction")])]),e._v(" "),t("p",[e._v("We believe that by continuously improving computer perfor")]),e._v(" "),t("p",[e._v("mance, we can efectively alleviate the current adversarial")]),e._v(" "),t("p",[e._v("training problems and greatly reduce the execution time. The")]),e._v(" "),t("p",[e._v("goal of an adversarial attack is the model hidden behind the")]),e._v(" "),t("p",[e._v("system. If the system’s dependence on the model can be")]),e._v(" "),t("p",[e._v("reduced, this may enhance the model’s defesnse capabilities.")]),e._v(" "),t("p",[e._v("As analyzed in the fourth part, the feasible defense")]),e._v(" "),t("p",[e._v("methods in the physical world are mainly robust learning")]),e._v(" "),t("p",[e._v("and perturbation detection. These defense methods have")]),e._v(" "),t("p",[e._v("been proven efective in attacks in the digital world. Then,")]),e._v(" "),t("p",[e._v("whether other feasible defense methods in the digital world")]),e._v(" "),t("p",[e._v("can be adapted to the physical world through a certain trans")]),e._v(" "),t("p",[e._v("formation, this may also be a direction worthy of research")]),e._v(" "),t("p",[e._v("for defenders.")]),e._v(" "),t("h2",{attrs:{id:"report"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#report"}},[e._v("#")]),e._v(" Report")]),e._v(" "),t("h3",{attrs:{id:"topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topics"}},[e._v("#")]),e._v(" Topics")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("欢迎词")])]),e._v(" "),t("li",[t("p",[e._v("自我介绍，简述调研当中所作的工作")])])]),e._v(" "),t("p",[e._v("论文 综述 交流 简单的框架实战")]),e._v(" "),t("h3",{attrs:{id:"summarize-the-text"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summarize-the-text"}},[e._v("#")]),e._v(" Summarize the text")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("表述内容重点有关调研")]),e._v(" "),t("p",[e._v("实际应用中有哪些类型对抗样本？在物理世界对抗样本方法调研和问题分类")]),e._v(" "),t("p",[e._v("研究背景 实际方法的分类 和想要与大家分享的一篇paper")])])]),e._v(" "),t("h3",{attrs:{id:"analysis-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis-background"}},[e._v("#")]),e._v(" Analysis background")]),e._v(" "),t("ul",[t("li",[e._v("自动驾驶的事故")])]),e._v(" "),t("p",[e._v("制约行业发展")]),e._v(" "),t("ul",[t("li",[e._v("熊图")])]),e._v(" "),t("p",[t("em",[e._v("Deep neural networks (DNNs) are vulnerable to adversarial\nexamples where inputs with imperceptible perturbations mislead DNNs to incorrect results.")])]),e._v(" "),t("p",[e._v("FGSM")]),e._v(" "),t("ul",[t("li",[e._v("CNN需要具有鲁棒性")])]),e._v(" "),t("p",[t("em",[e._v("they bring serious security risks to deep-learning-based systems.")])]),e._v(" "),t("ul",[t("li",[e._v("物理世界中也存在对抗样本")])]),e._v(" "),t("p",[t("em",[e._v("adversarial examples exist not only in the digital world, but also in the physical world")])]),e._v(" "),t("p",[e._v("打印照片 高置信度误差")]),e._v(" "),t("h3",{attrs:{id:"categories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[e._v("#")]),e._v(" categories")]),e._v(" "),t("ul",[t("li",[e._v("大致分类 而不能进行精准分类")])]),e._v(" "),t("p",[e._v("简述分类方法")]),e._v(" "),t("ul",[t("li",[e._v("FGSM")])]),e._v(" "),t("p",[e._v("经典梯度下降方法 FGSM")]),e._v(" "),t("p",[t("em",[e._v("the researchers believe that the rea\nson for adversarial examples is the linear characteristics of\ndeep neural networks in high-dimensional space.")])]),e._v(" "),t("p",[t("em",[e._v("FGSM是一种一次攻击，即针对一张图加梯度也仅仅增一次梯度。但如果现在攻击的是一个复杂非线性模型的话，这样的方法可能就不能一定攻击成功。可以想象，复杂的非线性模型可能在极小的范围内剧烈变化，所以梯度跨度大可能就不能攻击成功")])]),e._v(" "),t("h3",{attrs:{id:"adversarial-examples-in-physical-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adversarial-examples-in-physical-world"}},[e._v("#")]),e._v(" Adversarial examples in physical world")]),e._v(" "),t("ul",[t("li",[e._v("经典论文")])]),e._v(" "),t("p",[t("code",[e._v("打印纸")]),e._v("printed the adversarial pictures on paper, and successfully cheated the Inception v3 model after being photographed by the camera")]),e._v(" "),t("p",[t("code",[e._v("3d变换")]),e._v("3D printed tortoise")]),e._v(" "),t("p",[t("code",[e._v("贴纸")]),e._v("一组黑白贴纸，对手可以将这些贴纸贴在物理路标上(停车标志)。我们设计的扰动类似涂鸦")]),e._v(" "),t("h3",{attrs:{id:"difference-of-digital-physical"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#difference-of-digital-physical"}},[e._v("#")]),e._v(" Difference of digital & physical")]),e._v(" "),t("p",[e._v("a. Sensor viewing angle: The real physical world is in a\nthree-dimensional space.\nb. Light: The intensity of natural light and the color of\nambient light can afect the imaging of the adversarial\nexamples in the sensor.\nc. Distance: The size of the captured sample is afected by\nthe distance between the target and the sensor.")]),e._v(" "),t("h3",{attrs:{id:"practical-application-of-the-adversary-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#practical-application-of-the-adversary-examples"}},[e._v("#")]),e._v(" Practical application of the adversary examples")]),e._v(" "),t("h3",{attrs:{id:"ps-gans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-gans"}},[e._v("#")]),e._v(" PS-GANs")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("时间关系 缩略")])]),e._v(" "),t("li",[t("p",[e._v("感知与精神物理学结合")])]),e._v(" "),t("li",[t("p",[e._v("GANs zero-sum game")])]),e._v(" "),t("li",[t("p",[e._v("生成器G用于强化patch，判决器D用于判断patch是否具外观自然性")])]),e._v(" "),t("li",[t("p",[e._v("不再是噪声而是具有意义的“涂鸦”，因此它得到的新patch，不再像其他的技术得到的patch那样有着意义不明的图案")])]),e._v(" "),t("li",[t("p",[e._v("只需更小的distortion就能得到更好的攻击效果")])]),e._v(" "),t("li",[t("p",[e._v("半白盒攻击情况")])]),e._v(" "),t("li",[t("p",[e._v("不一定很理想 因为上述提到的因素")])]),e._v(" "),t("li",[t("p",[e._v("图像的扰动对人类来说是不可见的，但对深度学习模型却是致命的，会导致错误的分类。")])])]),e._v(" "),t("h3",{attrs:{id:"future"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future"}},[e._v("#")]),e._v(" Future")]),e._v(" "),t("ul",[t("li",[e._v("防御方面比较少")]),e._v(" "),t("li",[e._v("围绕着攻击和防御开展的对抗补丁")])])])}),[],!1,null,null,null);a.default=s.exports}}]);